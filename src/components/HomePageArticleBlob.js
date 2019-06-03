import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { shortenBodyText, generateHandle } from "../helpers/articleHelpers.js";

export default class HomePageArticleBlob extends Component {
  render() {
    var handle = generateHandle(this.props.title);

    return (
      <div className="article-blob">
        <Link to={handle} className="article-blob-title"> 
          {this.props.title}
        </Link>
        <div className="article-blob-date">{this.props.date}</div>
        <span
          className="article-body"
          dangerouslySetInnerHTML={{__html: shortenBodyText(this.props.body)}}
        />
        <span>
          {'  '}
          <Link to={handle}>More</Link>
        </span>
      </div>
    );
  }
};
