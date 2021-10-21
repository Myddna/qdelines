import React from "react";
import styles from "./ControlForm.module.css";
import { useInput } from "../../util/formHandling";
import { Form, Button } from "react-bootstrap";

const ControlForm = (props) => {
  const {
    value: xHeight,
    bind: bindXHeight,
    reset: resetXHeight,
  } = useInput(props.config.lineSetStructure.xHeight);

  const handleForm = (evt) => {
    evt.preventDefault();
    const values = evt.target.elements;
    let newConfig = { ...props.config };

    // Filling new Config
    newConfig.lineSetStructure.xHeight = parseInt(values.xHeight.value);
    console.log(newConfig);
    console.log(props);
    props.updateConfig(newConfig);
  };

  console.log(props);
  return (
    <div className={styles.ControlForm} data-testid="ControlForm">
      <Form onSubmit={handleForm}>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          onSubmit={handleForm}
        >
          <Form.Label>Altura de X</Form.Label>
          <Form.Control type="number" name="xHeight" {...bindXHeight} />
          <Form.Text className="text-muted">
            La altura en mm entre la línea base y la línea de X
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
};

export default ControlForm;
