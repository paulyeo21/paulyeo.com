import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage.js";
import Masthead from "./Masthead";
import Routes from "./Routes";
import "../static/css/main.scss";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Masthead />
        <div className="container">
          <Routes />
        </div>
      </Fragment>
    );
  }
};
