import React, { Component } from "react";
import { render } from "react-dom";

export default class BlogInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  updateTitle(val) {
    this.setState({ 
      title: val
    })
  };     
  updateContent(val) {
    this.setState({ 
      content: val
    })
  };
         
  render() {
    return (
      <div>
        <div className="blog-input text-success p-2">Create a Blog</div>
        <div>
        <input
            className="textBox"
            type="text"
            placeholder="blog title"
            onChange={ (e) => { this.updateTitle(e.target.value); } }
          />
          <input
            className="textBox"
            type="text"
            placeholder="blog text"
            onChange={ (e) => { this.updateContent(e.target.value); } }
          />
          <button
            className="postBtn text-success m-2"
            onClick={ () => {this.props.onBlog((this.state.title), (this.state.content)); } }
          >Post!</button>
        </div>
      </div>
    );
  }
}
