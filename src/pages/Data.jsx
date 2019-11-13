import React from "react";
import Users from "../components/Users.jsx";
import Posts from "../components/Posts.jsx";


export default function Data() {
    return (
        <div className="App">
          <header className="App-header">
                <div>
                    Users<Users />
                </div>
                <div>
                    <Posts />
                </div>
          </header>
        </div>
      );
    }
    
