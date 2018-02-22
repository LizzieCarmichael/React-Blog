import React, { Component } from 'react';
import { render } from 'react-dom';


export default class BlogView extends Component{
    render() {  
            let blog = this.props.card;
            return(
                <div 
                className="card col-sm-5 mx-auto justify-content-center mt-0 my-2 border-secondary borderWidth-5px">
                   <div className="card-body text-center">
                   <h4 className="card-title p-3 bg-secondary text-white"><strong>{blog.title}</strong></h4>
                   <p className="card-text">{blog.content}</p>
                   </div>
                </div>
            )
    return(
        <div className="row p-1">{blog}</div>
    )}
}