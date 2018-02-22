import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="bg-secondary p-2 text-white">
        {/* <img className="" src="" alt="" width="" height="" /> */}
        <Link className="p-2 text-white" to="/">
          Home
        </Link>
        <Link className="p-2 text-white" to="/blogs">
          Go to Blogs
        </Link>
        <Link className="p-2 text-white" to="/blogpost">
          Post a new blog!
        </Link>
        <Link className="p-2 text-white" to="/admin">
            Sign In
          </Link>

        {/* <div
          className="btn text-white"
          data-toggle="collapse"
          href="#authnav"
          role="button"
          aria-expanded="false"
          aria-controls="authnav"
        >
          Authorization
        </div>
        <div id="authnav" className="collapse">
          <Link className="login p-2 text-white" to="/login">
            Login
          </Link>
          <Link className="p-2 text-white" to="/logout">
            Logout
          </Link>
        </div> */}
      </nav>
    );
  }
}
