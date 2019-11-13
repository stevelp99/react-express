
import Likes from "../components/Likes";
import Dislike from "../components/Dislike";
import Comment from "../components/Comment";
import React, { Component } from "react";export class Form extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      comment: " ",
      comments: [],
      count: 0
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // increment = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // };
  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => {
      let newComments = [...state.comments];
      newComments.push({ name: state.name, comment: state.comment });
      return { name: " ", comment: " ", comments: newComments };
    });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    // let { count } = this.state;
    let comments = this.state.comments.map((item, index) => {
      return (
        <li key={index}>
          {item.name}: {item.comment},{" "}
          {/* <button onClick={this.increment}>Likes{count} </button> */}
          <Likes/>
          <Dislike/>
          <Comment/>
        </li>
      );
    });
    return (
      <div>
        <label>Comment Box: </label>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <textarea
          name="comment"
          type="text"
          value={this.state.comment}
          onChange={this.handleChange}
        ></textarea>
        <br />
        
        <ul>{comments}</ul>
      </div>
    );
  }
 }export default Form;