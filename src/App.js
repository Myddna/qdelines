import "./App.css";
import Container from "react-bootstrap/Container";
import ControlForm from "./components/ControlForm/ControlForm";
import Page from "./components/Page/Page";
import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import { Button, Row, Col } from "react-bootstrap";
import { FaPrint } from "react-icons/fa";
import { PageDefaultProps } from "./components/Page/PageDefinitions";
import IntroHero from "./components/IntroHero/IntroHero";
import { deepClone } from "./util/util";

const initialPageConfig = deepClone(PageDefaultProps);

function App() {
  // Using react-to-print:
  const componentRef = useRef();
  const handleOnBeforeGetContent = () => {
    setPrinting(true);
    return Promise.resolve();
  };
  const handleOnBeforePrint = () => {
    window.dataLayer.push({
      event: "event",
      eventProps: {
        category: "guidelinesPrint",
        action: "print",
        label: "config",
        value: JSON.stringify(pageConfig),
      },
    });
    setPrinting(false);
    return Promise.resolve();
  };

  // Config handling
  const handleResetConfig = () => {
    window.dataLayer.push({
      event: "event",
      eventProps: {
        category: "guidelines",
        action: "reset",
        label: "config",
        value: JSON.stringify(pageConfig),
      },
    });
    setPageConfig(deepClone(PageDefaultProps));
  };

  const handleInputChange = (evt) => {
    const target = evt.target;
    const name = target.name;

    let value = target.type === "checkbox" ? target.checked : target.value;
    if (target.type === "number") {
      value = parseFloat(value);
    }

    //console.log(`${name} => ${value}`);

    setPageConfig((previousState) => {
      const newState = { ...previousState };

      const nameParts = name.split("_");

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

  // States
  const [printing, setPrinting] = useState(false);
  const [pageConfig, setPageConfig] = useState(initialPageConfig);

  return (
    <div className="App">
      <IntroHero />
      <Container fluid>
        <Row>
          <Col md="6" xl="4">
            <ControlForm
              config={pageConfig}
              resetConfig={handleResetConfig}
              inputChange={handleInputChange}
            />
          </Col>
          <Col md="6" xl="8">
            <div className="text-center my-3">
              <ReactToPrint
                trigger={() => (
                  <Button size="sm">
                    <FaPrint />
                    Imprimir
                  </Button>
                )}
                content={() => componentRef.current}
                bodyClass="linesPrinting"
                documentTitle="CaliLíneas"
                onBeforeGetContent={handleOnBeforeGetContent}
                onBeforePrint={handleOnBeforePrint}
                removeAfterPrint="true"
                pageStyle="@page { margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }"
              />
            </div>
            <Page config={pageConfig} printing={printing} ref={componentRef} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
