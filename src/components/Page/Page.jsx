import React from 'react';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';
import LineSet from './LineSet/LineSet';
import {
  getPageSize,
  calculateRepetitions,
  PageDefaultProps,
  PagePropTypes,
  calculateLineSetHeight,
} from './PageDefinitions';
import styles from './Page.module.css';

const Page = function ({ config }) {
  const { t } = useTranslation();

  const pageMeasures = getPageSize(
    config.sizeName,
    config.orientation,
  );

  // Adding fixed margin for now: 10mm
  const pageContentMeasures = {
    width: pageMeasures.width - 20,
    height: pageMeasures.height - 20,
  };

  // Calculating repetitions
  const groupRepetitions = calculateRepetitions(
    pageContentMeasures,
    config.lineSetStructure,
  );

  const lineSetHeight = calculateLineSetHeight(config.lineSetStructure);

  /** Page adjustment to prevent white page at the end */
  const style = {
    width: `${pageMeasures.width}mm`,
    height: `${pageMeasures.height - 0.1}mm`,
  };

  // Computing final SVG Height
  const fullSvgHeight = lineSetHeight * groupRepetitions
    + config.lineSetStructure.separation * (groupRepetitions - 1);

  // Initial offset calculation for vertically center the guidelines
  // 10 default margin, -2 adjustment for page signature
  const initialYOffset = (pageContentMeasures.height - fullSvgHeight) / 2 + 10 - 2;

  if (groupRepetitions <= 0) {
    return <svg />;
  }

  return (
    <div id="guidelinesPage" className="printable">
      <style>
        {`
      @page {size: ${config.sizeName} ${config.orientation}; margin: 0; padding: 0; } 
      .signature { font: italic 2.5px sans-serif; fill: grey; }
      @media print {
        .thePage {
          width: ${style.width};
          height: ${style.height};
        }
      }
      `}

      </style>
      <svg
        className={`${styles.Page} thePage`}
        viewBox={`0 0 ${pageMeasures.width} ${pageMeasures.height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...Array(groupRepetitions)].map((elem, i) => {
          const startIn = {
            x: 10,
            y:
              lineSetHeight * i
              + config.lineSetStructure.separation * i
              + initialYOffset,
          };
          const key = `lineSet${i}`;
          return (
            <LineSet
              key={key}
              lineSetStructure={config.lineSetStructure}
              lineSetStyle={config.lineSetStyle}
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
          {t('svg.credit')}
          {' '}
          -
          {' '}
          <a href="https://calilineas.martam.dev">
            https://calilineas.martam.dev
          </a>
        </text>
      </svg>
    </div>
  );
};

Page.propTypes = {
  config: PropTypes.exact(PagePropTypes),
};

Page.defaultProps = {
  config: PageDefaultProps,
};

export default Page;
