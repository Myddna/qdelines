import PropTypes from 'prop-types';
import {
  validatePositiveNumber,
  validateInterval,
} from '../../util/validators';

export const PageDefinitions = {
  // This page sizes are defined in mm, portrait mode by default
  pageSizes: {
    A5: {
      width: 148.5,
      height: 210,
    },
    A4: {
      width: 210,
      height: 297,
    },
    A3: {
      width: 297,
      height: 420,
    },
  },
};

export const getPageSize = (sizeName, orientation) => {
  const size = PageDefinitions.pageSizes[sizeName];

  switch (orientation) {
    case 'landscape':
      // Invert dimensions
      return { width: size.height, height: size.width };
    case 'portrait':
      return size;
    default:
      return size;
  }
};

export const calculateLineSetHeight = (lineSetStructure) => (
  lineSetStructure.ascender
    + lineSetStructure.xHeight
    + lineSetStructure.descender
);

/**
 * Calculate how many repetitions fill the area with provided size.
 * @param {object} size {width: X, height: Y}
 * @param {object} lineSetStructure
 * @returns
 */
export const calculateRepetitions = (size, lineSetStructure) => {
  const lineSetHeight = calculateLineSetHeight(lineSetStructure);

  if (lineSetHeight + lineSetStructure.separation > 0) {
    return Math.floor(
      (size.height - lineSetStructure.separation) / (lineSetHeight + lineSetStructure.separation),
    );
  }
  return 0;
};

/**
 * Default values for page configuration
 */
export const PageDefaultProps = {
  sizeName: 'A4',
  orientation: 'landscape',
  lineSetStructure: {
    xHeight: 8,
    ascender: 6,
    descender: 6,
    auxAscender: 5,
    auxDescender: 5,
    aux1: 6.5,
    aux2: 1.5,
    separation: 5,
    obliqueSlant: 55,
    obliqueSeparation: 16,
  },
  lineSetStyle: {
    baseline: {
      color: '#000000',
      width: 0.5,
    },
    median: {
      color: '#000000',
      width: 0.5,
    },
    ascender: {
      color: '#000000',
      width: 0.3,
    },
    descender: {
      color: '#000000',
      width: 0.3,
    },
    auxAscender: {
      color: '#de3c4b',
      width: 0,
    },
    auxDescender: {
      color: '#de3c4b',
      width: 0,
    },
    aux1: {
      color: '#00799E',
      width: 0,
    },
    aux2: {
      color: '#00799E',
      width: 0,
    },
    oblique: {
      color: '#616161',
      width: 0.3,
    },
  },
};

/**
 * Validation
 */
const lineStyleStructure = {
  color: PropTypes.string,
  width: (
    props,
    propName,
    componentName,
  ) => validatePositiveNumber(props, propName, componentName, true),
};
export const PagePropTypes = {
  sizeName: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  lineSetStructure: PropTypes.exact({
    xHeight: (
      props,
      propName,
      componentName,
    ) => validatePositiveNumber(props, propName, componentName),
    ascender: (
      props,
      propName,
      componentName,
    ) => validatePositiveNumber(props, propName, componentName),
    descender: (
      props,
      propName,
      componentName,
    ) => validatePositiveNumber(props, propName, componentName),
    auxAscender: (
      props,
      propName,
      componentName,
    ) => validatePositiveNumber(props, propName, componentName),
    auxDescender: (
      props,
      propName,
      componentName,
    ) => validatePositiveNumber(props, propName, componentName),
    aux1: (
      props,
      propName,
      componentName,
    ) => validatePositiveNumber(props, propName, componentName),
    aux2: (
      props,
      propName,
      componentName,
    ) => validatePositiveNumber(props, propName, componentName),
    separation: (
      props,
      propName,
      componentName,
    ) => validatePositiveNumber(props, propName, componentName),
    obliqueSlant: (
      props,
      propName,
      componentName,
    ) => validateInterval(props, propName, componentName, [0, 360]),
    obliqueSeparation: (
      props,
      propName,
      componentName,
    ) => validatePositiveNumber(props, propName, componentName),
  }),
  lineSetStyle: PropTypes.shape({
    baseline: PropTypes.exact(lineStyleStructure),
  }),
};
