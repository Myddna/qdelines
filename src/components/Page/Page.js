import React, { forwardRef } from "react";
import styles from "./Page.module.css";
import "./Print.css";
import {
  getPageSize,
  calculateRepetitions,
  PageDefaultProps,
  PagePropTypes,
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
  /*
  const groupRepetitions = calculateRepetitions(
    pageContentMeasures,
    props.config.lineSetStructure
  );
  */
  let style = {};
  if (props.printing) {
    /**
     * react-to-print creates blank page if the component measures
     * are exactly the same than the page Substracting 0.1mm.
     */
    style = {
      width: `${pageMeasures.width}mm`,
      height: `${pageMeasures.height - 0.1}mm`,
    };
  }
  console.log(props.config.lineSetStructure.xHeight);
  return (
    <svg
      ref={ref}
      className={`${styles.Page} thePage`}
      data-testid="Page"
      viewBox={`0 0 ${pageMeasures.width} ${pageMeasures.height}`}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <LineSet
        lineSetStructure={props.config.lineSetStructure}
        lineSetStyle={props.config.lineSetStyle}
        startIn={{ x: 10, y: 10 }}
        width={pageContentMeasures.width}
      />
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
