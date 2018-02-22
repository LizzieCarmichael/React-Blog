import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className="justify-content-center row">
          <Link
            className="border-radius btn-secondary btn-lrg m-5 p-3"
            to="/blogs"
          >
            See all blogs
          </Link>
          <Link
            className="blog-input border-radius btn-secondary btn-lrg m-5 p-3"
            to="/blogpost"
          >
            Post a blog
          </Link>
        </div>
      </Fragment>
    );
  }
}
