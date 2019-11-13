import React,{Component} from "react"
const margin={
    margin: 50
}
export default class Clock extends Component{
    constructor(){
    super();
    this.state ={time:new Date()};
}
componentDidMount(){
    this.clockInterval=setInterval(()=>{
        this.setState({time:new Date()});
        },1000);
    }
componentWillUnmount(){
    clearInterval(this.clockInterval);
}
render() {
    return (
      <>
        <h1 style={margin}>The Local Time is: {this.state.time.toLocaleTimeString()}</h1>
      </>
    );
  }
}