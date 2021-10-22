import React from "react";
import styles from "./ControlForm.module.css";
import { Form, Button } from "react-bootstrap";
import { FaUndoAlt } from "react-icons/fa";

const ControlForm = (props) => {
  const handleInputChange = (evt) => {
    props.inputChange(evt);
  };

  const loadDefaults = (evt) => {
    props.resetConfig();
  };

  return (
    <div className={styles.ControlForm} data-testid="ControlForm">
      <Form id="pageControl">
        <div className="d-grid gap-4 d-sm-flex flex-wrap justify-content-between">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="lineSetStructure_xHeight">
              Altura de X
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStructure_xHeight"
              onChange={handleInputChange}
              value={props.config.lineSetStructure.xHeight}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="lineSetStyle_baseline_color">
              Color base
            </Form.Label>
            <Form.Control
              type="color"
              name="lineSetStyle_baseline_color"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.baseline.color}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="lineSetStyle_baseline_width">
              Ancho base
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStyle_baseline_width"
              step="0.1"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.baseline.width}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="lineSetStyle_median_color">Color X</Form.Label>
            <Form.Control
              type="color"
              name="lineSetStyle_median_color"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.median.color}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="lineSetStyle_median_width">Ancho X</Form.Label>
            <Form.Control
              type="number"
              name="lineSetStyle_median_width"
              step="0.1"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.median.width}
            />
          </Form.Group>
        </div>

        <div className="d-grid gap-2 d-sm-flex">
          <Button
            variant="outline-secondary"
            className="gap-3"
            onClick={loadDefaults}
          >
            <FaUndoAlt /> Reiniciar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ControlForm;
