/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import { IconContext } from 'react-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/saber-mas" component={SaberMas} />
      </Switch>
      <Footer />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="...is loading">
      <IconContext.Provider value={{ className: 'react-icons me-2' }}>
        <Index />
      </IconContext.Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
