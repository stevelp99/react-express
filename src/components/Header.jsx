
import React from 'react';
import logo from './logo.svg';
const container={
    display:"flex",
    flexDirection:"row",
}
const image={
    marginLeft:30,
    width:50,
    height:"auto"
}
const title={
    margin:40
}
class Header extends React.Component{
    render(){
        return <header>
            <div style={container}>
            <img src={logo} style={image} className="App-logo" alt="logo" />
            <h1 style={title}>Book site</h1>
            </div>
        </header>
    }
}
export default Header;