import React from "react";
import "./App.css";
// import Users from "./components/Users";
// import Posts from "./components/Posts";

import Header from "./components/Header";
// import Menu from "./Menu";
import Router from "./AppRouter";
// import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';



const background={
  backgroundColor:"grey"
}
function App() {
  return (
    <>
      <div style={background}>
        <Header/>
      </div>
      <div>
        <Router/>
      </div>
      <div>
        
      </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     {/* <div className= 'Header'>{Header}</div> */}
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;