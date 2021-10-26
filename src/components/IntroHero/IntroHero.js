import { Button } from "react-bootstrap";
import React from "react";
import { GiPencilRuler } from "react-icons/gi";
import styles from "./IntroHero.module.css";
import { Link } from "react-router-dom";

const IntroHero = () => (
  <div className={styles.IntroHero}>
    <div className="px-4 py-4 my-5 text-center">
      <div className="text-center">
        <GiPencilRuler size="3em" className="mb-2 ms-2" />
      </div>
      <h1 className="display-5 fw-bold">QDE Lines</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Generador de guías caligráficas</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/saber-mas" className="btn btn-primary gap-3 me-0">
            Saber más
          </Link>
          <Link to="/la-autora" className="btn btn-outline-secondary me-0">
            La autora
          </Link>
        </div>
      </div>
    </div>
    <div className="b-divider"></div>
  </div>
);

export default IntroHero;
