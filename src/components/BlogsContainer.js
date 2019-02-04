import React, { Component } from "react";
import { render } from "react-dom";
import Blog from "./Blog.js";
import blogs from "../data/blogs.js";

export default class HomePage extends Component {
  render() {
    return (
      Object.keys(blogs).map(id => {
        return <Blog 
                  key={id}
                  title={blogs[id].title}
                  timestamp={blogs[id].timestamp}
                  body={blogs[id].body}
               />
      })
    );
  }
};
