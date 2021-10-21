import "./App.css";
import Container from "react-bootstrap/Container";
import ControlForm from "./components/ControlForm/ControlForm";
import Page from "./components/Page/Page";
import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import { Button } from "react-bootstrap";
import { FaPrint } from "react-icons/fa";
import { IconContext } from "react-icons";
import { PageDefaultProps } from "./components/Page/PageDefinitions";

function App() {
  const [printing, setPrinting] = useState(false);
  const [pageConfig, setPageConfig] = useState(PageDefaultProps);

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

  const handleConfigChange = (newConfig) => {
    setPageConfig(newConfig);
  };

  console.log("Current xHeight: ", pageConfig.lineSetStructure.xHeight);

  return (
    <div className="App">
      <IconContext.Provider value={{ className: "me-2" }}>
        <ControlForm config={pageConfig} updateConfig={handleConfigChange} />
        <Container fluid>
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
        </Container>
      </IconContext.Provider>
    </div>
  );
}

export default App;
