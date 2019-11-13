import React,{Component} from 'react';

const title={
    margin:40
  }


class Pad extends Component {
    render() {
        return (
            <div style={title} className="button">
                <button id="1" onClick={e => this.handleClick(e)}>1</button>
                <button id="2" onClick={e => this.handleClick(e)}>2</button>
                <button id="3" onClick={e => this.handleClick(e)}>3</button>
                <button id="+" onClick={e => this.handleClick(e)}>+</button>
                <div/>
                <button id="4" onClick={e => this.handleClick(e)}>4</button>
                <button id="5" onClick={e => this.handleClick(e)}>5</button>
                <button id="6" onClick={e => this.handleClick(e)}>6</button>
                <button id="-" onClick={e => this.handleClick(e)}>-</button>
                <div/>
                <button id="7" onClick={e => this.handleClick(e)}>7</button>
                <button id="8" onClick={e => this.handleClick(e)}>8</button>
                <button id="9" onClick={e => this.handleClick(e)}>9</button>
                <button id="=" onClick={e => this.handleClick(e)}>=</button>
                <div/>
                <button id="0" onClick={e => this.handleClick(e)}>0</button>
                <div/>
            </div>
        );
    }
}

export default Pad;
