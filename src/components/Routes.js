import React, { Component } from "react";
import { render } from "react-dom";
import { Switch, Route } from "react-router-dom";
import Article from "./Article";
import HomePage from "./HomePage";
import articles from "../data/articles.json";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        {
          articles.map(article =>
            <Route
              exact
              key={article.id}
              path={"/" + article.handle}
              render={() =>
                <Article
                  key={article.id}
                  title={article.title}
                  date={article.date}
                  body={article.body}
                  handle={article.handle}
                />}
            />
          )
        }
        <Route path="/" component={HomePage} />
      </Switch>
    );
  }
};
