import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Localized images
import helpImage_es from "./../../../assets/helpGuideline_es.svg";
import helpImage_en from "./../../../assets/helpGuideline_en.svg";

const helpImage = {
  es: helpImage_es,
  en: helpImage_en,
};

const FormHelp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { t, i18n } = useTranslation();

  return (
    <>
      <Button
        size="sm"
        variant="outline-primary"
        className="mb-3"
        onClick={handleShow}
      >
        <FaQuestionCircle /> {t("ui.help")}
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="helpModal">
        <Modal.Header closeButton className="h5">
          Ayuda
        </Modal.Header>
        <Modal.Body>
          <p>
            La correspondencia entre las variables del formulario y las líneas
            generadas es la siguiente:
          </p>
          <img
            src={helpImage[i18n.resolvedLanguage]}
            alt="Descripción visual de las variables y su implicación en las guías"
            style={{ width: "100%", height: "auto" }}
            className="mb-3"
          />
          <ul>
            <li>
              Las medidas están en <strong>milímetros</strong>.
            </li>
            <li>
              La Inclinación está expresada en <strong>grados</strong>.
            </li>
            <li>
              La línea base tiene distancia 0 porque es la línea de referencia
              inicial
            </li>
            <li>
              Puedes <strong>guardar tus guías en PDF</strong> si en el cuadro
              de diálogo de "Imprimir" seleccionas la impresora PDF de tu
              sistema.
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormHelp;
