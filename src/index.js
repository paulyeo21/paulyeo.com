import React from "react";
import { render } from "react-dom";
import App from "./components/App.js";
import { HashRouter } from "react-router-dom";

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
