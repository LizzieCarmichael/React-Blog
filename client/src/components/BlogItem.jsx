import React, { Component } from "react";
import { render } from "react-dom";
import BlogView from "./BlogView";

//Create a component to display an individual blog
export default class BlogsItem extends Component {
    constructor(props) {
      super(props);

      this.state ={
          blog: [],
          id: ''
      }
      
    }
    render() {
            let item = this.props.item.map(item => {
                return(
                    <div className="list-group-item">
                      <BlogView card={this.state.blog}/>
                    </div>
                )
            })
          return(
              <div>{item}</div>
          )      
    }
};      

                 