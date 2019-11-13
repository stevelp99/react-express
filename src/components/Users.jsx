import React from "react";
const layout={
  display: "flex",
  listStyleType:"none",
}
const listLayout={
  marginRight:10,
}
export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data });
      });
  }

  render() {
    return (
      <ul style={layout} >
        {this.state.users.map((user, index) => {
          return <li style={listLayout} key={index}>{user}</li>;
        })}
      </ul>
    );
  }
}
