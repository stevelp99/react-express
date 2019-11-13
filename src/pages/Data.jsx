import React from "react";
import Users from "../components/Users.jsx";
import Posts from "../components/Posts.jsx";
const titleFont={
    fontSize:50
  }
  const usersFont={
    fontSize:26
  }
export default function Data() {
    return (
        <div className="App">
          <header className="App-header">
                <div style={titleFont}>Users
                    <div style={usersFont}><Users />
                    </div>
                </div>
                <div>
                    <Posts />
                </div>
          </header>
        </div>
      );
    }
    
