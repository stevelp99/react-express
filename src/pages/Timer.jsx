import React,{Component} from 'react'

const margin={
    margin: 50
}

export default class Timer extends Component{
    state={
        min: 2,
        sec: 0,
    }
    componentDidMount(){
        this.myTimer=setInterval(()=>{
            const {sec,min}=this.state
            if (sec>0){
                this.setState(({sec})=>({
                sec:sec-1
                }))
            }
            if (sec===0){
                if (min===0){
                    clearInterval(this.myTimer)
                } else{
                    this.setState(({min})=>({
                        min:min-1,
                        sec:59
                    }))
                }
            }
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.myTimer)
    }
    render(){
        const{min,sec} =this.state
        return(
            <div style={margin}>
                 {min===0&&sec===0
                    ? <h1>Timer complete</h1>
                    : <h1>Time Remaining:{min}:{sec}</h1>
                }
            </div>
        )
    }
}