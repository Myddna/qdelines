import React from "react";
import styles from "./ControlForm.module.css";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { FaUndoAlt } from "react-icons/fa";

const ControlForm = (props) => {
  const handleInputChange = (evt) => {
    props.inputChange(evt);
  };

  const loadDefaults = (evt) => {
    props.resetConfig();
  };

  const xHeightFields = () => {
    return (
      <Card className="mb-3">
        <Card.Header>Línea base y línea de X</Card.Header>
        <Card.Body>
          <Row>
            <Form.Group as={Col} sm="6" md>
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
            <Form.Group as={Col} sm="6" md>
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
            <Form.Group as={Col} sm="6" md>
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
            <Form.Group as={Col} sm="6" md>
              <Form.Label htmlFor="lineSetStyle_median_color">
                Color X
              </Form.Label>
              <Form.Control
                type="color"
                name="lineSetStyle_median_color"
                onChange={handleInputChange}
                value={props.config.lineSetStyle.median.color}
              />
            </Form.Group>
            <Form.Group as={Col} sm="6" md>
              <Form.Label htmlFor="lineSetStyle_median_width">
                Ancho X
              </Form.Label>
              <Form.Control
                type="number"
                name="lineSetStyle_median_width"
                step="0.1"
                onChange={handleInputChange}
                value={props.config.lineSetStyle.median.width}
              />
            </Form.Group>
          </Row>
        </Card.Body>
      </Card>
    );
  };

  const ascenderFields = () => {
    return (
      <Card className="mb-3">
        <Card.Header>Ascendentes</Card.Header>
        <Card.Body>
          <Row>
            <Form.Group as={Col} sm="6" md>
              <Form.Label htmlFor="lineSetStructure_ascender">
                Distancia
              </Form.Label>
              <Form.Control
                type="number"
                name="lineSetStructure_ascender"
                onChange={handleInputChange}
                value={props.config.lineSetStructure.ascender}
              />
            </Form.Group>
            <Form.Group as={Col} sm="6" md>
              <Form.Label htmlFor="lineSetStyle_ascender_color">
                Color
              </Form.Label>
              <Form.Control
                type="color"
                name="lineSetStyle_ascender_color"
                onChange={handleInputChange}
                value={props.config.lineSetStyle.ascender.color}
              />
            </Form.Group>
            <Form.Group as={Col} sm="6" md>
              <Form.Label htmlFor="lineSetStyle_ascender_width">
                Línea
              </Form.Label>
              <Form.Control
                type="number"
                name="lineSetStyle_ascender_width"
                step="0.1"
                onChange={handleInputChange}
                value={props.config.lineSetStyle.ascender.width}
              />
            </Form.Group>
          </Row>
        </Card.Body>
      </Card>
    );
  };

  const capsFields = () => {
    return (
      <Card className="mb-3">
        <Card.Header>Mayúsculas</Card.Header>
        <Card.Body>
          <Row>
            <Form.Group as={Col} sm="6" md>
              <Form.Label htmlFor="lineSetStructure_caps">Distancia</Form.Label>
              <Form.Control
                type="number"
                name="lineSetStructure_caps"
                step="0.1"
                onChange={handleInputChange}
                value={props.config.lineSetStructure.caps}
              />
            </Form.Group>
            <Form.Group as={Col} sm="6" md>
              <Form.Label htmlFor="lineSetStyle_caps_color">Color</Form.Label>
              <Form.Control
                type="color"
                name="lineSetStyle_caps_color"
                onChange={handleInputChange}
                value={props.config.lineSetStyle.caps.color}
              />
            </Form.Group>
            <Form.Group as={Col} sm="6" md>
              <Form.Label htmlFor="lineSetStyle_caps_width">Línea</Form.Label>
              <Form.Control
                type="number"
                name="lineSetStyle_caps_width"
                step="0.1"
                onChange={handleInputChange}
                value={props.config.lineSetStyle.caps.width}
              />
            </Form.Group>
          </Row>
        </Card.Body>
      </Card>
    );
  };

  const descenderFields = () => {
    return (
      <Card className="mb-3">
        <Card.Header>Descendentes</Card.Header>
        <Card.Body>
          <Row>
            <Form.Group as={Col} sm="6" md>
              <Form.Label htmlFor="lineSetStructure_descender">
                Distancia
              </Form.Label>
              <Form.Control
                type="number"
                name="lineSetStructure_descender"
                step="0.1"
                onChange={handleInputChange}
                value={props.config.lineSetStructure.descender}
              />
            </Form.Group>
            <Form.Group as={Col} sm="6" md>
              <Form.Label htmlFor="lineSetStyle_descender_color">
                Color
              </Form.Label>
              <Form.Control
                type="color"
                name="lineSetStyle_descender_color"
                onChange={handleInputChange}
                value={props.config.lineSetStyle.descender.color}
              />
            </Form.Group>
            <Form.Group as={Col} sm="6" md>
              <Form.Label htmlFor="lineSetStyle_descender_width">
                Línea
              </Form.Label>
              <Form.Control
                type="number"
                name="lineSetStyle_descender_width"
                step="0.1"
                onChange={handleInputChange}
                value={props.config.lineSetStyle.descender.width}
              />
            </Form.Group>
          </Row>
        </Card.Body>
      </Card>
    );
  };

  const obliqueFields = () => {
    return (
      <Card className="mb-3">
        <Card.Header>Oblicuas</Card.Header>
        <Card.Body>
          <Row>
            <Form.Group as={Col} sm="6" md>
              <Form.Label htmlFor="lineSetStructure_obliqueSeparation">
                Separación
              </Form.Label>
              <Form.Control
                type="number"
                name="lineSetStructure_obliqueSeparation"
                step="0.1"
                onChange={handleInputChange}
                value={props.config.lineSetStructure.obliqueSeparation}
              />
            </Form.Group>
            <Form.Group as={Col} sm="6" md>
              <Form.Label htmlFor="lineSetStructure_obliqueSlant">
                Inclinación
              </Form.Label>
              <Form.Control
                type="number"
                name="lineSetStructure_obliqueSlant"
                min={0}
                max={180}
                test="hello"
                onChange={handleInputChange}
                value={props.config.lineSetStructure.obliqueSlant}
              />
            </Form.Group>
            <Form.Group as={Col} sm="6" md>
              <Form.Label htmlFor="lineSetStyle_oblique_color">
                Color
              </Form.Label>
              <Form.Control
                type="color"
                name="lineSetStyle_oblique_color"
                onChange={handleInputChange}
                value={props.config.lineSetStyle.oblique.color}
              />
            </Form.Group>
            <Form.Group as={Col} sm="6" md>
              <Form.Label htmlFor="lineSetStyle_oblique_width">
                Línea
              </Form.Label>
              <Form.Control
                type="number"
                name="lineSetStyle_oblique_width"
                step="0.1"
                onChange={handleInputChange}
                value={props.config.lineSetStyle.oblique.width}
              />
            </Form.Group>
          </Row>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className={styles.ControlForm} data-testid="ControlForm">
      <Form id="pageControl">
        {xHeightFields()}
        {ascenderFields()}
        {capsFields()}
        {descenderFields()}
        {obliqueFields()}
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
