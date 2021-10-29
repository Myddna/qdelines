import React, { useState } from "react";
import styles from "./ControlForm.module.css";
import { Form, Button, Row, Col, Card, Collapse } from "react-bootstrap";
import {
  FaArrowUp,
  FaArrowDown,
  FaQuestionCircle,
  FaUndoAlt,
} from "react-icons/fa";
import FormSectionTitle from "./FormSectionTitle/FormSectionTitle";
import FormHelp from "./FormHelp/FormHelp";
import { useTranslation } from "react-i18next";

const ControlForm = (props) => {
  const { t } = useTranslation();

  const handleInputChange = (evt) => {
    props.inputChange(evt);
  };

  const loadDefaults = (evt) => {
    props.resetConfig();
  };

  const paperFields = () => {
    return (
      <div>
        <FormSectionTitle as="h2" className="h5">
          {t("ui.cform.structure")}
        </FormSectionTitle>
        <Row className="mb-4">
          <Form.Group as={Col} sm="4" md>
            <Form.Label htmlFor="sizeName">
              {t("ui.cform.papersize")}
            </Form.Label>
            <Form.Select
              name="sizeName"
              onChange={handleInputChange}
              value={props.config.sizeName}
            >
              <option value="A5">A5</option>
              <option value="A4">A4</option>
              <option value="A3">A3</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} sm="4" md>
            <Form.Label htmlFor="orientation">
              {t("ui.cform.orientation")}
            </Form.Label>
            <Form.Select
              name="orientation"
              onChange={handleInputChange}
              value={props.config.orientation}
            >
              <option value="landscape">{t("ui.cform.landscape")}</option>
              <option value="portrait">{t("ui.cform.portrait")}</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} sm="4" md>
            <Form.Label htmlFor="lineSetStructure_separation">
              {t("ui.cform.linespacing")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStructure_separation"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStructure.separation}
            />
          </Form.Group>
        </Row>
      </div>
    );
  };

  const baselineFields = () => {
    return (
      <div>
        <FormSectionTitle as="h2" className="h5">
          {t("ui.cform.baseline")}
        </FormSectionTitle>
        <Row className="mb-4">
          <Form.Group as={Col}>
            <Form.Label htmlFor="lineSetStructure_reference">
              {t("ui.cform.distancereference")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStructure_reference"
              value="0"
              disabled
            />
          </Form.Group>
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStyle_baseline_color">
              {t("ui.cform.color")}
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
              {t("ui.cform.linewidth")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStyle_baseline_width"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.baseline.width}
            />
          </Form.Group>
        </Row>
      </div>
    );
  };

  const medianFields = () => {
    return (
      <div>
        <FormSectionTitle as="h2" className="h5">
          {t("ui.cform.middleline")}
        </FormSectionTitle>
        <Row className="mb-4">
          <Form.Group as={Col}>
            <Form.Label htmlFor="lineSetStructure_xHeight">
              {t("ui.cform.distance")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStructure_xHeight"
              step="0.1"
              min="1"
              onChange={handleInputChange}
              value={props.config.lineSetStructure.xHeight}
            />
          </Form.Group>
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStyle_median_color">
              {t("ui.cform.color")}
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
              {t("ui.cform.linewidth")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStyle_median_width"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.median.width}
            />
          </Form.Group>
        </Row>
      </div>
    );
  };

  const ascenderFields = () => {
    return (
      <div>
        <FormSectionTitle as="h2" className="h5">
          {t("ui.cform.ascenders")}
        </FormSectionTitle>
        <Row className="mb-4">
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStructure_ascender">
              {t("ui.cform.distance")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStructure_ascender"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStructure.ascender}
            />
          </Form.Group>
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStyle_ascender_color">
              {t("ui.cform.color")}
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
              {t("ui.cform.linewidth")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStyle_ascender_width"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.ascender.width}
            />
          </Form.Group>
        </Row>
      </div>
    );
  };

  const auxAscenderFields = () => {
    return (
      <div>
        <FormSectionTitle as="h2" className="h5">
          {t("ui.cform.descenders")}
        </FormSectionTitle>
        <Row className="mb-4">
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStructure_auxAscender">
              {t("ui.cform.distance")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStructure_auxAscender"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStructure.auxAscender}
            />
          </Form.Group>
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStyle_auxAscender_color">
              {t("ui.cform.color")}
            </Form.Label>
            <Form.Control
              type="color"
              name="lineSetStyle_auxAscender_color"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.auxAscender.color}
            />
          </Form.Group>
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStyle_auxAscender_width">
              {t("ui.cform.linewidth")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStyle_auxAscender_width"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.auxAscender.width}
            />
          </Form.Group>
        </Row>
      </div>
    );
  };

  const auxDescenderFields = () => {
    return (
      <div>
        <FormSectionTitle as="h2" className="h5">
          {t("ui.cform.auxascenders")}
        </FormSectionTitle>
        <Row className="mb-4">
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStructure_auxDescender">
              {t("ui.cform.distance")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStructure_auxDescender"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStructure.auxDescender}
            />
          </Form.Group>
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStyle_auxDescender_color">
              {t("ui.cform.color")}
            </Form.Label>
            <Form.Control
              type="color"
              name="lineSetStyle_auxDescender_color"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.auxDescender.color}
            />
          </Form.Group>
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStyle_auxDescender_width">
              {t("ui.cform.linewidth")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStyle_auxDescender_width"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.auxDescender.width}
            />
          </Form.Group>
        </Row>
      </div>
    );
  };

  const descenderFields = () => {
    return (
      <div>
        <FormSectionTitle as="h2" className="h5">
          {t("ui.cform.descenders")}
        </FormSectionTitle>
        <Row className="mb-4">
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStructure_descender">
              {t("ui.cform.distance")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStructure_descender"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStructure.descender}
            />
          </Form.Group>
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStyle_descender_color">
              {t("ui.cform.color")}
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
              {t("ui.cform.linewidth")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStyle_descender_width"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.descender.width}
            />
          </Form.Group>
        </Row>
      </div>
    );
  };

  const obliqueFields = () => {
    return (
      <div>
        <FormSectionTitle as="h2" className="h5">
          {t("ui.cform.oblique")}
        </FormSectionTitle>
        <Row className="mb-4">
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStructure_obliqueSeparation">
              {t("ui.cform.separation")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStructure_obliqueSeparation"
              step="0.1"
              min="1"
              onChange={handleInputChange}
              value={props.config.lineSetStructure.obliqueSeparation}
            />
          </Form.Group>
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStructure_obliqueSlant">
              {t("ui.cform.slant")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStructure_obliqueSlant"
              min={0}
              max={180}
              step="0.5"
              test="hello"
              onChange={handleInputChange}
              value={props.config.lineSetStructure.obliqueSlant}
            />
          </Form.Group>
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStyle_oblique_color">
              {t("ui.cform.color")}
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
              {t("ui.cform.linewidth")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStyle_oblique_width"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.oblique.width}
            />
          </Form.Group>
        </Row>
      </div>
    );
  };

  const aux1Fields = () => {
    return (
      <div>
        <FormSectionTitle as="h2" className="h5">
          {t("ui.cform.auxcentral1")}
        </FormSectionTitle>
        <Row className="mb-4">
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStructure_aux1">
              {t("ui.cform.distance")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStructure_aux1"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStructure.aux1}
            />
          </Form.Group>
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStyle_aux1_color">
              {t("ui.cform.color")}
            </Form.Label>
            <Form.Control
              type="color"
              name="lineSetStyle_aux1_color"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.aux1.color}
            />
          </Form.Group>
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStyle_aux1_width">
              {t("ui.cform.linewidth")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStyle_aux1_width"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.aux1.width}
            />
          </Form.Group>
        </Row>
      </div>
    );
  };

  const aux2Fields = () => {
    return (
      <div>
        <FormSectionTitle as="h2" className="h5">
          {t("ui.cform.auxcentral2")}
        </FormSectionTitle>
        <Row className="mb-4">
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStructure_aux2">
              {t("ui.cform.distance")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStructure_aux2"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStructure.aux2}
            />
          </Form.Group>
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStyle_aux2_color">
              {t("ui.cform.color")}
            </Form.Label>
            <Form.Control
              type="color"
              name="lineSetStyle_aux2_color"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.aux2.color}
            />
          </Form.Group>
          <Form.Group as={Col} sm="6" md>
            <Form.Label htmlFor="lineSetStyle_aux2_width">
              {t("ui.cform.linewidth")}
            </Form.Label>
            <Form.Control
              type="number"
              name="lineSetStyle_aux2_width"
              step="0.1"
              min="0"
              onChange={handleInputChange}
              value={props.config.lineSetStyle.aux2.width}
            />
          </Form.Group>
        </Row>
      </div>
    );
  };

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.ControlForm}>
      <Form id="pageControl">
        <div className="d-grid gap-2 d-sm-flex justify-content-center">
          <Button
            size="sm"
            variant="outline-secondary"
            className="mb-3"
            onClick={loadDefaults}
          >
            <FaUndoAlt /> {t("ui.reset")}
          </Button>
          <FormHelp />
        </div>
        {paperFields()}
        {baselineFields()}
        {medianFields()}
        {ascenderFields()}
        {descenderFields()}
        {obliqueFields()}
        <div className="text-center my-3">
          <Button
            onClick={() => {
              props.toggleOptional(!open);
              setOpen(!open);
            }}
            aria-controls="optional-fields"
            aria-expanded={open}
          >
            {open ? (
              <div>
                <FaArrowUp />
                {t("ui.cform.hideoptional")}
              </div>
            ) : (
              <div>
                <FaArrowDown /> {t("ui.cform.showoptional")}
              </div>
            )}
          </Button>
        </div>
        <Collapse in={open}>
          <div id="optional-fields">
            {auxAscenderFields()}
            {auxDescenderFields()}
            {aux1Fields()}
            {aux2Fields()}
          </div>
        </Collapse>

        <Card>
          <Card.Body>
            <Card.Text>
              <FaQuestionCircle className="text-primary" />{" "}
              {t("ui.cform.help.measures")}
            </Card.Text>
            <Card.Text>
              <FaQuestionCircle className="text-primary" />{" "}
              {t("ui.cform.help.deactivate")}
            </Card.Text>
          </Card.Body>
        </Card>
      </Form>
    </div>
  );
};

export default ControlForm;
