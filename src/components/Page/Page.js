import React, { forwardRef } from "react";
import styles from "./Page.module.css";
import "./Print.css";
import {
  getPageSize,
  calculateRepetitions,
  PageDefaultProps,
  PagePropTypes,
  calculateLineSetHeight,
} from "./PageDefinitions";
import LineSet from "./LineSet/LineSet";

const Page = forwardRef((props, ref) => {
  const pageMeasures = getPageSize(
    props.config.sizeName,
    props.config.orientation
  );

  // Adding fixed margin for now: 10mm
  const pageContentMeasures = {
    width: pageMeasures.width - 20,
    height: pageMeasures.height - 20,
  };

  // Calculating repetitions
  const groupRepetitions = calculateRepetitions(
    pageContentMeasures,
    props.config.lineSetStructure
  );

  const lineSetHeight = calculateLineSetHeight(props.config.lineSetStructure);

  let style = {};
  if (props.printing) {
    /**
     * react-to-print creates blank page if the component measures
     * are exactly the same than the page substracting 1mm at te bottom.
     */
    style = {
      width: `${pageMeasures.width}mm`,
      height: `${pageMeasures.height - 1}mm`,
    };
  }

  // Computing final SVG Height
  const fullSvgHeight =
    lineSetHeight * groupRepetitions +
    props.config.lineSetStructure.separation * (groupRepetitions - 1);

  // Initial offset calculation for vertically center the guidelines
  // 10 default margin, -2 adjustment for page signature
  const initialYOffset =
    (pageContentMeasures.height - fullSvgHeight) / 2 + 10 - 2;

  return (
    <svg
      ref={ref}
      className={`${styles.Page} thePage`}
      data-testid="Page"
      viewBox={`0 0 ${pageMeasures.width} ${pageMeasures.height}`}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <style>{`@page {size: ${props.config.sizeName} ${props.config.orientation}; } .signature { font: italic 2.5px sans-serif; }`}</style>
      {[...Array(groupRepetitions)].map((elem, i) => {
        let startIn = {
          x: 10,
          y:
            lineSetHeight * i +
            props.config.lineSetStructure.separation * i +
            initialYOffset,
        };
        //        console.log(lineSetHeight, startIn.y);
        return (
          <LineSet
            key={i}
            lineSetStructure={props.config.lineSetStructure}
            lineSetStyle={props.config.lineSetStyle}
            startIn={startIn}
            width={pageContentMeasures.width}
          />
        );
      })}
      <text
        y={initialYOffset + fullSvgHeight + 3.5}
        x="10"
        className="signature"
      >
        Guías generadas con QDE Lines -{" "}
        <a href="https://lines.quedemoniosescribo.art">
          https://lines.quedemoniosescribo.art
        </a>
      </text>
    </svg>
  );
});

/**
 * Visit https://reactjs.org/docs/typechecking-with-proptypes.html for details on Typechecking with PropTypes
 */
Page.propTypes = PagePropTypes;

/**
 * Definition of the default page: all settings active
 */
Page.defaultProps = PageDefaultProps;

export default Page;
