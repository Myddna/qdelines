import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import { Trans, useTranslation } from 'react-i18next';

// Localized images
import helpImageEs from '../../../assets/helpGuideline_es.svg';
import helpImageEn from '../../../assets/helpGuideline_en.svg';

const helpImage = {
  es: helpImageEs,
  en: helpImageEn,
};

const FormHelp = function () {
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
        <FaQuestionCircle />
        {' '}
        {t('ui.help')}
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="helpModal">
        <Modal.Header closeButton className="h5">
          {t('ui.helpModal.title')}
        </Modal.Header>
        <Modal.Body>
          <p>{t('ui.helpModal.0')}</p>
          <img
            src={helpImage[i18n.resolvedLanguage]}
            alt={t('ui.helpModal.imgAlt')}
            style={{ width: '100%', height: 'auto' }}
            className="mb-3"
          />
          {/**
           * Here I'm using Trans component because the content has basic html tags
           * and the "t" function is unable to render them.
           */}
          <ul>
            <li>
              <Trans i18nKey="ui.helpModal.1" />
            </li>
            <li>
              <Trans i18nKey="ui.helpModal.2" />
            </li>
            <li>
              <Trans i18nKey="ui.helpModal.3" />
            </li>
            <li>
              <Trans i18nKey="ui.helpModal.4" />
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormHelp;
