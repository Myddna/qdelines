import './App.css';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import {
  Button, Row, Col, Alert,
} from 'react-bootstrap';
import { FaPrint } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ControlForm from './components/ControlForm/ControlForm';
import Page from './components/Page/Page';
import { PageDefaultProps } from './components/Page/PageDefinitions';
import IntroHero from './components/IntroHero/IntroHero';
import deepClone from './util/util';

const initialPageConfig = deepClone(PageDefaultProps);

const App = function () {
  const { t } = useTranslation();
  const [pageConfig, setPageConfig] = useState(initialPageConfig);

  /**
   * Reseting of configuration to default values
   */
  const handleResetConfig = () => {
    setPageConfig(deepClone(PageDefaultProps));
  };

  /**
   * Config form input change handling
   * @param {SyntheticEvent} evt Change Event
   */
  const handleInputChange = (evt) => {
    const { target } = evt;
    const { name } = target;

    let value = target.type === 'checkbox' ? target.checked : target.value;
    if (target.type === 'number') {
      value = parseFloat(value);
    }

    setPageConfig((previousState) => {
      const newState = { ...previousState };
      const nameParts = name.split('_');

      switch (nameParts.length) {
        case 1:
          newState[nameParts[0]] = value;
          break;
        case 2:
          newState[nameParts[0]][nameParts[1]] = value;
          break;
        case 3:
          newState[nameParts[0]][nameParts[1]][nameParts[2]] = value;
          break;
        default:
          newState.name = value;
      }

      return newState;
    });
  };

  /**
   * Toggles optional lines
   * @param {bool} show
   */
  const handleToggleOptional = (show) => {
    setPageConfig((previousState) => {
      const newState = { ...previousState };

      if (show) {
        // Line position
        newState.lineSetStructure.auxAscender = newState.lineSetStructure.ascender - 1;
        newState.lineSetStructure.auxDescender = newState.lineSetStructure.descender - 1;
        newState.lineSetStructure.aux1 = newState.lineSetStructure.xHeight - 1.5;
        newState.lineSetStructure.aux2 = 1.5;

        // Line style
        newState.lineSetStyle.auxAscender.width = 0.3;
        newState.lineSetStyle.auxDescender.width = 0.3;
        newState.lineSetStyle.aux1.width = 0.3;
        newState.lineSetStyle.aux2.width = 0.3;
      } else {
        // Line style
        newState.lineSetStyle.auxAscender.width = 0;
        newState.lineSetStyle.auxDescender.width = 0;
        newState.lineSetStyle.aux1.width = 0;
        newState.lineSetStyle.aux2.width = 0;
      }

      return newState;
    });
  };

  /**
   * Launches browser's print functionality
   */
  const printPage = () => {
    window.print();
  };

  // Specian Instagram embedded browser warning
  const showInstagramWarning = window.navigator.userAgent.indexOf('Instagram') >= 0;

  return (
    <div className="App">
      <IntroHero />
      <Container fluid>
        {showInstagramWarning && (
        <Alert
          variant="secondary"
          id="printText"
          className="my-3 text-center"
        >
          {t('ui.warning.instagram')}
        </Alert>
        )}
        <Row>
          <Col md="6" xl="4" className="form-container">
            <ControlForm
              config={pageConfig}
              resetConfig={handleResetConfig}
              inputChange={handleInputChange}
              toggleOptional={handleToggleOptional}
            />
          </Col>
          <Col md="6" xl="8" className="page-container">
            <div className="text-center py-3 sticky-md-top printable-page-wrapper">
              <div className="actions">
                <Button size="sm" onClick={printPage}>
                  <FaPrint />
                  {' '}
                  {t('ui.print')}
                </Button>
              </div>
              <Page config={pageConfig} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
