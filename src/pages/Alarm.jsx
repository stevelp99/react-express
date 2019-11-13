import React from 'react'


export default class AlarmClock extends React.Component {
    constructor() {
      super();
      this.state = {
        currentTime: '',
        alarmTime: ''
      };
      this.setAlarmTime = this.setAlarmTime.bind(this);
    }
  
    componentDidMount(){
      this.clock = setInterval(
        () => this.setCurrentTime(),
        1000
      )
      this.interval = setInterval(
        () => this.checkAlarmClock(),
      1000)
    }
  
    componentWillUnmount(){
      clearInterval(this.clock);
      clearInterval(this.interval);
    }
  
    setCurrentTime(){
      this.setState({
        currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
      });
    }
  
    setAlarmTime(event) {
      event.preventDefault();
      const inputAlarmTimeModified = event.target.value + ':00'
      this.setState({
        alarmTime: inputAlarmTimeModified
      })
    }
  
    checkAlarmClock(){
      if(this.state.alarmTime ==='undefined' || !this.state.alarmTime) {
        this.alarmMessage = "Please set your alarm.";
      } else {
        this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
        if(this.state.currentTime === this.state.alarmTime) {
          alert("its time!");
        } else {
          console.log("not yet");
        }
      }   
    }
  
    render() {
      return (
        <div>
          <h1>React Alarm Clock</h1>
          <h2>It is {this.state.currentTime}.
          </h2>
          <h2>{this.alarmMessage}
          </h2>
          <form>
            <input type="time" onChange={this.setAlarmTime}></input>
          </form>
        </div>
      );
    }
  }

// import React from 'react'


// export default function Alarm() {
// class Alarm extends Component{
//   constructor(){
//     super();
//     //new Date(yr,month,day,hr,min,sec,milsec)
//     this.state={
//       dateTime: new Date (2019, 11, 07)
//     }
//   }

//   componentDidMount(){
//     setInterval(()=>{
//       //check if time now is time of slasm
//       if(new Date() >this.state.dateTime){
//         //show message, end alarm (clear interval)
//       }
//     },1000)
//   }

//   render(){
//     return{
//       <>
//       <h1>Alarm</h1>
//       </>
//     }
//   }
// }
