import React from "react";
import Button from 'react-bootstrap/Button';

const border={
    display:"flex",
    flexDirection: "row",
    border: '2px solid red',
    width: 160,
    marginLeft: 50,
}
const margin={
    margin:40
}
const buttonMargin={
    margin:5
}
const align={
    textAlign:"center",
    padding:5
}
class counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
}
    }
    increase=()=>{
        this.setState({count:this.state.count +1});
    }
    decrease=()=>{
        this.setState({count:this.state.count -1});
    }

    render(){
        return(
            <>
            <h1 style={margin} >Increment Counter</h1>
            <div style={border} className="count">
            <Button variant="primary" onClick={this.increase} style={buttonMargin}className="counter">+</Button>
            <Button variant="primary" onClick={this.decrease} style={buttonMargin}className="counter">-</Button>
                <h2 style={align}>{this.state.count}</h2>
            </div>
            </>
        );
    }
}
export default counter;