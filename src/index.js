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
import TagManager from "react-gtm-module";
import PoliticaDePrivacidad from "./components/PoliticaDePrivacidad/PoliticaDePrivacidad";

const tagManagerArgs = {
  gtmId: "GTM-N78M5P8",
};
TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ className: "react-icons me-2" }}>
      <Router>
        <Header></Header>

        <Route exact path="/" component={App} />
        <Route exact path="/la-autora" component={LaAutora} />
        <Route exact path="/saber-mas" component={SaberMas} />
        <Route
          exact
          path="/politica-de-privacidad"
          component={PoliticaDePrivacidad}
        />

        <Footer />
      </Router>
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
