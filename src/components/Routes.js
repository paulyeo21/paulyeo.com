import React, { Component } from "react";
import { render } from "react-dom";
import { Switch, Route } from "react-router-dom";
import Article from "./Article";
import HomePage from "./HomePage";
import articles from "../data/articles.js";
import { generateHandle } from "../helpers/articleHelpers.js";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        {
          articles.map(article =>
            <Route
              exact
              key={article.id}
              path={"/" + generateHandle(article.title)}
              render={() =>
                <Article
                  key={article.id}
                  title={article.title}
                  date={article.date}
                  body={article.body}
                />}
            />
          )
        }
        <Route path="/" component={HomePage} />
      </Switch>
    );
  }
};
