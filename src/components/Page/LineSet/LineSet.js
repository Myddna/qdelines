import React from "react";

const LineSet = (props) => {
  let structure = props.lineSetStructure;
  let style = props.lineSetStyle;
  let coordinates = props.startIn;
  let totalWidth = props.width;

  const getStrokeDasharray = (lineWidth) => {
    return `${Math.max(1.2, lineWidth * 3)} ${Math.max(0.8, lineWidth * 2)}`;
  };

  // For Obliques
  let startOblique = {
    x: coordinates.x,
    y:
      coordinates.y +
      structure.ascender +
      structure.xHeight +
      structure.descender,
  };
  return (
    <g>
      {/** Ascender */}
      {structure.ascender && (
        <line
          x1={coordinates.x}
          y1={coordinates.y}
          x2={coordinates.x + totalWidth}
          y2={coordinates.y}
          stroke={style.ascender.color}
          strokeWidth={style.ascender.width}
        />
      )}
      {/** Aux Ascender */}
      {structure.auxAscender && (
        <line
          x1={coordinates.x}
          y1={coordinates.y + (structure.ascender - structure.auxAscender)}
          x2={coordinates.x + totalWidth}
          y2={coordinates.y + (structure.ascender - structure.auxAscender)}
          stroke={style.auxAscender.color}
          strokeWidth={style.auxAscender.width}
          strokeDasharray={getStrokeDasharray(style.auxAscender.width)}
        />
      )}
      {/** Median */}
      <line
        x1={coordinates.x}
        y1={coordinates.y + structure.ascender}
        x2={coordinates.x + totalWidth}
        y2={coordinates.y + structure.ascender}
        stroke={style.median.color}
        strokeWidth={style.median.width}
      />
      {/** Median to baseline mark */}
      <line
        x1={coordinates.x + (style.baseline.width * 1.5) / 2}
        y1={coordinates.y + structure.ascender}
        x2={coordinates.x + (style.baseline.width * 1.5) / 2}
        y2={coordinates.y + structure.ascender + structure.xHeight}
        stroke={style.baseline.color}
        strokeWidth={style.baseline.width + style.baseline.width * 1.5}
      />
      {/** Baseline */}
      <line
        x1={coordinates.x}
        y1={coordinates.y + structure.ascender + structure.xHeight}
        x2={coordinates.x + totalWidth}
        y2={coordinates.y + structure.ascender + structure.xHeight}
        stroke={style.baseline.color}
        strokeWidth={style.baseline.width}
      />
      {/** Descender */}
      {structure.descender && (
        <line
          x1={coordinates.x}
          y1={
            coordinates.y +
            structure.ascender +
            structure.xHeight +
            structure.descender
          }
          x2={coordinates.x + totalWidth}
          y2={
            coordinates.y +
            structure.ascender +
            structure.xHeight +
            structure.descender
          }
          stroke={style.descender.color}
          strokeWidth={style.descender.width}
        />
      )}
      {/** Aux Descender*/}
      {structure.auxDescender && (
        <line
          x1={coordinates.x}
          y1={
            coordinates.y +
            structure.ascender +
            structure.xHeight +
            structure.auxDescender
          }
          x2={coordinates.x + totalWidth}
          y2={
            coordinates.y +
            structure.ascender +
            structure.xHeight +
            structure.auxDescender
          }
          stroke={style.auxDescender.color}
          strokeWidth={style.auxDescender.width}
          strokeDasharray={getStrokeDasharray(style.auxDescender.width)}
        />
      )}
      {/** Oblique */}
      {structure.obliqueSeparation > 0 &&
        drawObliques(
          coordinates.y,
          startOblique,
          structure.obliqueSlant,
          structure.obliqueSeparation,
          totalWidth,
          style.oblique
        )}
      {/** Aux lines */}
      {structure.aux1 && (
        <line
          x1={coordinates.x}
          y1={
            coordinates.y +
            structure.ascender +
            structure.xHeight -
            structure.aux1
          }
          x2={coordinates.x + totalWidth}
          y2={
            coordinates.y +
            structure.ascender +
            structure.xHeight -
            structure.aux1
          }
          stroke={style.aux1.color}
          strokeWidth={style.aux1.width}
          strokeDasharray={getStrokeDasharray(style.aux1.width)}
        />
      )}
      {structure.aux2 && (
        <line
          x1={coordinates.x}
          y1={
            coordinates.y +
            structure.ascender +
            structure.xHeight -
            structure.aux2
          }
          x2={coordinates.x + totalWidth}
          y2={
            coordinates.y +
            structure.ascender +
            structure.xHeight -
            structure.aux2
          }
          stroke={style.aux2.color}
          strokeWidth={style.aux2.width}
          strokeDasharray={getStrokeDasharray(style.aux2.width)}
        />
      )}
    </g>
  );
};

const drawObliques = (
  topLimitY,
  startOblique,
  obliqueSlant,
  obliqueSeparation,
  totalWidth,
  style
) => {
  const linesNumber = Math.floor(totalWidth / obliqueSeparation);
  const tanAlpha = Math.tan(convertToRadians(obliqueSlant));

  let lines = [];
  let computedY = startOblique.y - topLimitY;
  let computedX = computedY / tanAlpha;
  let lineCoords = {
    x1: startOblique.x,
    y1: startOblique.y,
    x2: startOblique.x + computedX,
    y2: topLimitY,
  };
  for (let i = 0; i <= linesNumber; i++) {
    const endOutsideGuideline =
      Math.round(lineCoords.x2, 2) > Math.round(startOblique.x + totalWidth, 2);
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
        />
      );
      lineCoords.x1 += obliqueSeparation;
      lineCoords.x2 += obliqueSeparation;
    }
  }
  return <g>{lines}</g>;
};

const convertToRadians = (deg) => {
  return deg * (Math.PI / 180);
};

export default LineSet;
