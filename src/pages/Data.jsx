import React from "react";
import Users from "../components/Users.jsx";
import Posts from "../components/Posts.jsx";
import logo from "../components/logo.svg";


export default function Data() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Users />
            <Posts />
          </header>
        </div>
      );
    }
    
