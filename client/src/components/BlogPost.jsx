import React, { Component } from "react";
import { render } from "react-dom";
import * as blogService from "../services/blogs";

import BlogInput from "./BlogInput";

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
  }
  saveBlog(title, content) {
    let data = {
      title: title,
      content: content
    };
    blogService.insert(data)
    .then(id => {
        console.log(id)
    })
    .catch(e => {
        console.log(e)
    })
  }

  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col">
            <BlogInput
              onBlog={
                // this.saveBlog.bind(this)
                (title, content) => {
                  this.saveBlog(title, content);
                }
              }
            />
          </div>
        </div>
      </main>
    );
  }
}
