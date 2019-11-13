import React from "react";
import HomePage from "./pages/HomePage";
import LatestBooksPage from "./pages/LatestBooksPage";
import PageNotFound from "./pages/PageNotFound";
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import Books from "./pages/Books";
import Counter from "./pages/Counter";
import Clock from "./pages/Clock";
import Timer from "./pages/Timer";
import Alarm from "./pages/Alarm";
import World from "./pages/World";
import Calc from "./pages/Calc";
import Form from "./pages/Form";
import Data from "./pages/Data";
const header ={
    display: "flex",
    flexDirection: "row",
    listStyleType: "none"
}
const space={
    margin:5
}
const linkSpace={
    textDecoration:"none"
}
export default function AppRouter(){
    return(
    <Router>
        <ul style={header}>
            <li style={space}><Link style={linkSpace} to="/">Home</Link></li>
            <li style={space}><Link style={linkSpace}to="/latest">Latest Novels</Link></li>
            <li style={space}><Link style={linkSpace}to="counter">Counter</Link></li>
            <li style={space}><Link style={linkSpace}to="clock">Clock</Link></li>
            <li style={space}><Link style={linkSpace}to="timer">Timer</Link></li>
            <li style={space}><Link style={linkSpace}to="alarm">Alarm</Link></li>
            <li style={space}><Link style={linkSpace}to="world">World Clock</Link></li>
            <li style={space}><Link style={linkSpace}to="pad">Calculator</Link></li>
            <li style={space}><Link style={linkSpace}to="form">Form</Link></li>
            <li style={space}><Link style={linkSpace}to="data">Data</Link></li>

        </ul>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/latest">
                <LatestBooksPage />
            </Route>
            <Route exact path="/books/:id">
                <Books />
            </Route>
            <Route exact path="/counter">
                <Counter/>
            </Route>
            <Route exact path="/clock">
                <Clock/>
            </Route>
            <Route exact path="/timer">
                <Timer/>
            </Route>
            <Route exact path="/alarm">
                <Alarm/>
            </Route>
            <Route exact path="/world">
                <World/>
            </Route>
            <Route exact path="/pad">
                <Calc/>
            </Route>
            <Route exact path="/form">
                <Form/>
            </Route>
            <Route exact path="/data">
                <Data/>
            </Route>
            <Route>
                <PageNotFound />
            </Route>
        </Switch>
    </Router>
    );
}