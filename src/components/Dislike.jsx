
import React, {Component} from "react";

export default class Disikes extends Component{
    constructor(props){
      super(props);
      this.state ={
        count: 0,
        }
    };
    decrease=()=>{
        this.setState({count:this.state.count +1}
            );
    };
        render(){
            let { count } = this.state;
            return(
            <button onClick={this.decrease}>Dislike{count}</button>
            );
        }
};
