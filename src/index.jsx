/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import { IconContext } from 'react-icons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import App from './App';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SaberMas from './components/SaberMas/SaberMas';

// Localization
import './i18n';

const Index = function () {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;

  useEffect(() => {
    document.title = t('ui.metatag.title');
  }, [lang, t]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/saber-mas" element={<SaberMas />} />
      </Routes>
      <Footer />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="...is loading">
      <IconContext.Provider value={{ className: 'react-icons me-2' }}>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </IconContext.Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
