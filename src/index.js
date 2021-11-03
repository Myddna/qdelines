import React from "react";
import ReactDOM from "react-dom";
import "./custom.scss";
import App from "./App";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LaAutora from "./components/LaAutora/LaAutora";
import SaberMas from "./components/SaberMas/SaberMas";
import { Suspense } from "react";

// Localization
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="...is loading">
      <IconContext.Provider value={{ className: "react-icons me-2" }}>
        <Router>
          <Header />

          <Route exact path="/" component={App} />
          <Route exact path="/la-autora" component={LaAutora} />
          <Route exact path="/saber-mas" component={SaberMas} />

          <Footer />
        </Router>
      </IconContext.Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
