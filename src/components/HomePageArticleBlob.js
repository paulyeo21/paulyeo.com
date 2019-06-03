import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

function shortenBodyText(body) {
  return body.slice(0,200) + "..."
}

export default class HomePageArticleBlob extends Component {
  render() {
    return (
      <div className="article-blob">
        <Link to={this.props.handle} className="article-blob-title"> 
          {this.props.title}
        </Link>
        <div className="article-blob-date">{this.props.date}</div>
        <div className="article-body">
          {shortenBodyText(this.props.body)}
          {'  '}
          <Link to={this.props.handle}>More</Link>
        </div>
      </div>
    );
  }
};
