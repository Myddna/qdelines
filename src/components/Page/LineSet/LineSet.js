import React from "react";

const LineSet = (props) => {
  const structure = props.lineSetStructure;
  const style = props.lineSetStyle;
  const coordinates = props.startIn;
  const totalWidth = props.width;

  console.log("LineSet: ", structure);
  return (
    <g data-testid="LineSet">
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
      {/** Caps */}
      {structure.caps && (
        <line
          x1={coordinates.x}
          y1={coordinates.y + (structure.ascender - structure.caps)}
          x2={coordinates.x + totalWidth}
          y2={coordinates.y + (structure.ascender - structure.caps)}
          stroke={style.caps.color}
          strokeWidth={style.caps.width}
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
    </g>
  );
};

export default LineSet;
