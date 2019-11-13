import React from "react";
import Post from "./Post";
const border={
  display:"flex",
  flexDirection:"column",
  margin: 50,
  listStyleType:"none",
  borderStyle:"solid",
  width:600,
  padding:10
}
export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch("/posts")
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      });
  }

  render() {
    let posts = this.state.posts.map(post => {
      return (
        <div style={border}>
        <Post
          title={post.title}
          content={post.content}
          createdAt={post.createdAt}
        />
        </div>
      );
    });
    return posts;
  }
}
