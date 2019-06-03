import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import articles from "../data/articles.json";

export default class Article extends Component {
  render() {
    return (
      <div className="article">
        <div className="article-title">{this.props.title}</div>
        <div className="article-date">{this.props.date}</div>
        <div className="article-body">{this.props.body}</div>
      </div>
    );
  }
};
