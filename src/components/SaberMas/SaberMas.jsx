import React from 'react';
import { Container } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';

const SaberMas = function () {
  const { t } = useTranslation();
  return (
    <div>
      <Container className="my-3">
        <h1 className="mb-4">{t('page.knowmore.pageTitle')}</h1>
        <h2>{t('page.knowmore.pageSubtitle')}</h2>
        <p>
          <Trans i18nKey="page.knowmore.1">
            <strong>CaliLíneas</strong>
            {' '}
            is a
            {' '}
            <a href="https://es.reactjs.org/" target="_blank" rel="noreferrer">
              React
            </a>
            {' '}
            web app to create calligraphy guidelines.
          </Trans>
        </p>
        <p>{t('page.knowmore.2')}</p>
        <div className="highlighted-block">
          <p>
            <Trans i18nKey="page.knowmore.example.1" />
          </p>
          <p>{t('page.knowmore.example.2')}</p>
          <ul>
            <li>
              <Trans i18nKey="page.knowmore.example.3">
                Línea media: 2 * 4 =
                {' '}
                <strong>8</strong>
                {' '}
                <span className="text-muted">
                  (2 es el ancho de la plumilla y 4 el ratio elegido)
                </span>
              </Trans>
            </li>
            <li>
              <Trans i18nKey="page.knowmore.example.4" />
            </li>
            <li>{t('page.knowmore.example.2')}</li>
          </ul>
        </div>
        <p>{t('page.knowmore.3')}</p>
        <h2>{t('page.knowmore.4')}</h2>
        <p>
          <Trans i18nKey="page.knowmore.5" />
        </p>
        <h2>{t('page.knowmore.6')}</h2>
        <p>{t('page.knowmore.7')}</p>
        <p>{t('page.knowmore.8')}</p>
        <h2>{t('page.knowmore.9')}</h2>
        <p>
          <Trans i18nKey="page.knowmore.10">
            Encuentra
            {' '}
            <a
              href="https://quedemoniosescribo.art"
              target="_blank"
              rel="noreferrer"
            >
              aquí
            </a>
            {' '}
            la respuesta.
          </Trans>
        </p>
      </Container>
    </div>
  );
};

export default SaberMas;
