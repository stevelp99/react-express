import React, {Component} from "react";

export default class Likes extends Component{
    constructor(props){
      super(props);
      this.state ={
        count: 0,
        }
    };
      increase=() =>{
        this.setState({
          count:this.state.count+1
        })
    };
        render(){
            let { count } = this.state;
            return(
            <button onClick={this.increase}>Likes{count}</button>
            );
        }
};
