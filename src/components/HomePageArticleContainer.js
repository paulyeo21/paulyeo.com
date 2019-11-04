import React, { Component } from "react";
import { render } from "react-dom";
import HomePageArticleBlob from "./HomePageArticleBlob.js";
import articles from "../data/articles.js";

export default class HomePageArticleContainer extends Component {
  render() {
    return (
      articles.map(article => 
        <HomePageArticleBlob 
          key={article.id}
          title={article.title}
          date={article.date}
          body={article.body}
        />
      )
    );
  }
};
