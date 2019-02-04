import React, { Component } from "react";
import { render } from "react-dom";
import BlogsContainer from "./BlogsContainer";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <b>paulyeo.com</b>
        <BlogsContainer />
      </div>
    );
  }
};
