import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from "./auth/privateRoute";
import Login from "./auth/login";
import Logout from "./auth/logout";
import Welcome from "./Welcome";
import BlogsList from "./BlogsList";
import BlogPost from "./BlogPost";
import Navbar from "./Navbar";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/blogs" component={BlogsList} />
            <Route exact path="/blogpost" component={BlogPost} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <PrivateRoute path="/admin" component={Admin} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
