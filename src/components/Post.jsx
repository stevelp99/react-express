import React from "react";
const titleFont={
  fontSize:30
}
const contentFont={
  fontSize:16
}
const timestampFont={
  fontSize:10
}
export default function Post(props) {
  return (
    <div className="post">
      <h2 style={titleFont}>{props.title}</h2>
      <p style={contentFont}>{props.content}</p>
      <small style={timestampFont}>Created on: {props.createdAt}</small>
    </div>
  );
}
