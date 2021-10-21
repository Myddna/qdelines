import PropTypes from "prop-types";
import {
  validatePositiveNumber,
  validateInterval,
} from "../../util/validators";

export const PageDefinitions = {
  // This page sizes are defined in mm, portrait mode by default
  pageSizes: {
    A4: {
      width: 210,
      height: 297,
    },
  },
};

export const getPageSize = (sizeName, orientation) => {
  const size = PageDefinitions.pageSizes[sizeName];

  switch (orientation) {
    case "landscape":
      // Invert dimensions
      return { width: size.height, height: size.width };
    case "portrait":
      return size;
    default:
      return size;
  }
};

/**
 * Calculate how many repetitions fill the area with provided size.
 * @param {object} size {width: X, height: Y}
 * @param {object} lineSetStructure
 * @returns
 */
export const calculateRepetitions = (size, lineSetStructure) => {
  return 1;
};

/**
 * Default values for page configuration
 */
export const PageDefaultProps = {
  sizeName: "A4",
  orientation: "landscape",
  lineSetStructure: {
    xHeight: 8,
    ascender: 6,
    descender: 6,
    caps: 4.5,
    separation: 4,
    obliqueSlant: 30,
    obliqueSeparation: 8,
  },
  lineSetStyle: {
    baseline: {
      color: "#000000",
      width: 0.5,
    },
    median: {
      color: "#000000",
      width: 0.5,
    },
    ascender: {
      color: "#000000",
      width: 0.3,
    },
    descender: {
      color: "#000000",
      width: 0.3,
    },
    caps: {
      color: "#de3c4b",
      width: 0.3,
    },
    oblique: {
      color: "#000000",
      width: 0.3,
    },
  },
};

/**
 * Validation
 */
const lineStyleStructure = {
  color: PropTypes.string,
  width: (props, propName, componentName) =>
    validatePositiveNumber(props, propName, componentName, true),
};
export const PagePropTypes = {
  sizeName: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  lineSetStructure: PropTypes.exact({
    xHeight: (props, propName, componentName) =>
      validatePositiveNumber(props, propName, componentName),
    ascender: (props, propName, componentName) =>
      validatePositiveNumber(props, propName, componentName),
    descender: (props, propName, componentName) =>
      validatePositiveNumber(props, propName, componentName),
    caps: (props, propName, componentName) =>
      validatePositiveNumber(props, propName, componentName),
    separation: (props, propName, componentName) =>
      validatePositiveNumber(props, propName, componentName),
    obliqueSlant: (props, propName, componentName) =>
      validateInterval(props, propName, componentName, [0, 360]),
    obliqueSeparation: (props, propName, componentName) =>
      validatePositiveNumber(props, propName, componentName),
  }),
  lineSetStyle: PropTypes.shape({
    baseline: PropTypes.exact(lineStyleStructure),
  }),
};
