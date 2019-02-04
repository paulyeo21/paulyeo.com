import React, { Component } from "react";
import { render } from "react-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.timestamp}</p>
        <p>{this.props.body}</p>
      </div>
    );
  }
};
