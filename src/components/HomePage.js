import React, { Component } from "react";
import { render } from "react-dom";
import HomePageArticleContainer from "./HomePageArticleContainer";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <HomePageArticleContainer />
      </div>
    );
  }
};
