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
    setPrinting(false);
    return Promise.resolve();
  };

  // Config handling
  const handleResetConfig = () => {
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
            <Page config={pageConfig} printing={printing} ref={componentRef} />
            <div className="text-center mb-3">
              <ReactToPrint
                trigger={() => (
                  <Button>
                    <FaPrint />
                    Imprimir
                  </Button>
                )}
                content={() => componentRef.current}
                bodyClass="linesPrinting"
                documentTitle="QDE Lines"
                onBeforeGetContent={handleOnBeforeGetContent}
                onBeforePrint={handleOnBeforePrint}
                removeAfterPrint="true"
                pageStyle="@page { size: A4 landscape;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
