import React, { Component } from "react";
import { render } from "react-dom";
import * as blogService from "../services/blogs";
import BlogView from "./BlogView";
import BlogItem from './BlogItem';

export default class BlogsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        blogs:[]
  };
  }
  componentDidMount() {
    blogService.all()
      .then(array => {
        this.setState({ blogs: array });
      });
  }

  render() {
    return (
      <div>
        <h1 className="justify-content-center text-secondary">Blogs</h1>
        <div className="row mx-auto justify-content-center">
        { this.state.blogs.map((item, index) => {
            return  <BlogView card={item} key={index} />
          })
        }</div>
      </div>
    );
  }
}



