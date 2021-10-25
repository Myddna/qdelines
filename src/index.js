import React from "react";
import ReactDOM from "react-dom";
import "./custom.scss";
import App from "./App";
import Footer from "./components/Footer/Footer";
import { IconContext } from "react-icons";

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ className: "react-icons me-2" }}>
      {/* <Header></Header> */}
      <App />
      <Footer />
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
