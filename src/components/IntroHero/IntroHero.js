import { Button } from "react-bootstrap";
import React from "react";
import { GiPencilRuler } from "react-icons/gi";
import styles from "./IntroHero.module.css";

const IntroHero = () => (
  <div className={styles.IntroHero} data-testid="IntroHero">
    <div className="px-4 py-5 my-5 text-center">
      <div className="text-center">
        <GiPencilRuler size="3em" className="mb-2 ms-2" />
      </div>
      <h1 className="display-5 fw-bold">QDE Lines</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Generador de guías caligráficas</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Button variant="primary" className="gap-3 me-0">
            Saber más
          </Button>
          <Button variant="outline-secondary" className="me-0">
            La autora
          </Button>
        </div>
      </div>
    </div>
    <div className="b-divider"></div>
  </div>
);

export default IntroHero;
