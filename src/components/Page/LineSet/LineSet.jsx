import React from 'react';
import { PropTypes } from 'prop-types';
import { PageDefaultProps, PagePropTypes } from '../PageDefinitions';

const convertToRadians = (deg) => deg * (Math.PI / 180);

/**
 * Draws the oblique lines, extracted to function because its more complicated than regular lines.
 */
const drawObliques = (
  topLimitY,
  startOblique,
  obliqueSlant,
  obliqueSeparation,
  totalWidth,
  style,
) => {
  const linesNumber = Math.floor(totalWidth / obliqueSeparation);
  const tanAlpha = Math.tan(convertToRadians(obliqueSlant));

  const lines = [];
  const computedY = startOblique.y - topLimitY;
  const computedX = computedY / tanAlpha;
  const lineCoords = {
    x1: startOblique.x,
    y1: startOblique.y,
    x2: startOblique.x + computedX,
    y2: topLimitY,
  };
  for (let i = 0; i <= linesNumber; i += 1) {
    const endOutsideGuideline = Math.round(lineCoords.x2, 2)
      > Math.round(startOblique.x + totalWidth, 2);
    if (!endOutsideGuideline) {
      lines.push(
        <line
          key={i}
          x1={lineCoords.x1}
          y1={lineCoords.y1}
          x2={lineCoords.x2}
          y2={lineCoords.y2}
          stroke={style.color}
          strokeWidth={style.width}
        />,
      );
      lineCoords.x1 += obliqueSeparation;
      lineCoords.x2 += obliqueSeparation;
    }
  }
  return <g>{lines}</g>;
};

const LineSet = function (props) {
  const {
    lineSetStructure, lineSetStyle, startIn, width,
  } = props;

  const getStrokeDasharray = (lineWidth) => `${Math.max(1.2, lineWidth * 3)} ${Math.max(0.8, lineWidth * 2)}`;

  // For Obliques
  const startOblique = {
    x: startIn.x,
    y:
      startIn.y
      + lineSetStructure.ascender
      + lineSetStructure.xHeight
      + lineSetStructure.descender,
  };

  return (
    <g>
      {/** Oblique */}
      {lineSetStructure.obliqueSeparation > 0
      && drawObliques(
        startIn.y,
        startOblique,
        lineSetStructure.obliqueSlant,
        lineSetStructure.obliqueSeparation,
        width,
        lineSetStyle.oblique,
      )}
      {/** Ascender */}
      {lineSetStructure.ascender && (
        <line
          x1={startIn.x}
          y1={startIn.y}
          x2={startIn.x + width}
          y2={startIn.y}
          stroke={lineSetStyle.ascender.color}
          strokeWidth={lineSetStyle.ascender.width}
        />
      )}
      {/** Aux Ascender */}
      {lineSetStructure.auxAscender && (
        <line
          x1={startIn.x}
          y1={startIn.y + (lineSetStructure.ascender - lineSetStructure.auxAscender)}
          x2={startIn.x + width}
          y2={startIn.y + (lineSetStructure.ascender - lineSetStructure.auxAscender)}
          stroke={lineSetStyle.auxAscender.color}
          strokeWidth={lineSetStyle.auxAscender.width}
          strokeDasharray={getStrokeDasharray(lineSetStyle.auxAscender.width)}
        />
      )}
      {/** Median */}
      <line
        x1={startIn.x}
        y1={startIn.y + lineSetStructure.ascender}
        x2={startIn.x + width}
        y2={startIn.y + lineSetStructure.ascender}
        stroke={lineSetStyle.median.color}
        strokeWidth={lineSetStyle.median.width}
      />
      {/** Median to baseline mark */}
      <line
        x1={startIn.x + (lineSetStyle.baseline.width * 1.5) / 2}
        y1={startIn.y + lineSetStructure.ascender}
        x2={startIn.x + (lineSetStyle.baseline.width * 1.5) / 2}
        y2={startIn.y + lineSetStructure.ascender + lineSetStructure.xHeight}
        stroke={lineSetStyle.baseline.color}
        strokeWidth={lineSetStyle.baseline.width + lineSetStyle.baseline.width * 1.5}
      />
      {/** Baseline */}
      <line
        x1={startIn.x}
        y1={startIn.y + lineSetStructure.ascender + lineSetStructure.xHeight}
        x2={startIn.x + width}
        y2={startIn.y + lineSetStructure.ascender + lineSetStructure.xHeight}
        stroke={lineSetStyle.baseline.color}
        strokeWidth={lineSetStyle.baseline.width}
      />
      {/** Descender */}
      {lineSetStructure.descender && (
        <line
          x1={startIn.x}
          y1={
            startIn.y
            + lineSetStructure.ascender
            + lineSetStructure.xHeight
            + lineSetStructure.descender
          }
          x2={startIn.x + width}
          y2={
            startIn.y
            + lineSetStructure.ascender
            + lineSetStructure.xHeight
            + lineSetStructure.descender
          }
          stroke={lineSetStyle.descender.color}
          strokeWidth={lineSetStyle.descender.width}
        />
      )}
      {/** Aux Descender */}
      {lineSetStructure.auxDescender && (
        <line
          x1={startIn.x}
          y1={
            startIn.y
            + lineSetStructure.ascender
            + lineSetStructure.xHeight
            + lineSetStructure.auxDescender
          }
          x2={startIn.x + width}
          y2={
            startIn.y
            + lineSetStructure.ascender
            + lineSetStructure.xHeight
            + lineSetStructure.auxDescender
          }
          stroke={lineSetStyle.auxDescender.color}
          strokeWidth={lineSetStyle.auxDescender.width}
          strokeDasharray={getStrokeDasharray(lineSetStyle.auxDescender.width)}
        />
      )}
      {/** Aux lines */}
      {lineSetStructure.aux1 && (
        <line
          x1={startIn.x}
          y1={
            startIn.y
            + lineSetStructure.ascender
            + lineSetStructure.xHeight
            - lineSetStructure.aux1
          }
          x2={startIn.x + width}
          y2={
            startIn.y
            + lineSetStructure.ascender
            + lineSetStructure.xHeight
            - lineSetStructure.aux1
          }
          stroke={lineSetStyle.aux1.color}
          strokeWidth={lineSetStyle.aux1.width}
          strokeDasharray={getStrokeDasharray(lineSetStyle.aux1.width)}
        />
      )}
      {lineSetStructure.aux2 && (
        <line
          x1={startIn.x}
          y1={
            startIn.y
            + lineSetStructure.ascender
            + lineSetStructure.xHeight
            - lineSetStructure.aux2
          }
          x2={startIn.x + width}
          y2={
            startIn.y
            + lineSetStructure.ascender
            + lineSetStructure.xHeight
            - lineSetStructure.aux2
          }
          stroke={lineSetStyle.aux2.color}
          strokeWidth={lineSetStyle.aux2.width}
          strokeDasharray={getStrokeDasharray(lineSetStyle.aux2.width)}
        />
      )}
    </g>
  );
};

LineSet.propTypes = {
  lineSetStructure: PagePropTypes.lineSetStructure,
  lineSetStyle: PagePropTypes.lineSetStyle,
  startIn: PropTypes.exact({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  width: PropTypes.number,
};

LineSet.defaultProps = {
  lineSetStructure: PageDefaultProps.lineSetStructure,
  lineSetStyle: PageDefaultProps.lineSetStyle,
  startIn: { x: 0, y: 0 },
  width: 0,
};

export default LineSet;
