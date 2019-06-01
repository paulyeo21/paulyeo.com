import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Masthead extends Component {
  render() {
    return (
      <div className="masthead-container">
        <div className="masthead">
          <Link to="/" className="masthead-link">Paul Yeo</Link>
        </div>
      </div>
    );
  }
};
