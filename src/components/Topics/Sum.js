import React, { Component } from "react";

export default class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      num1: 0,
      num2: 0
    };
  }

  handleInput(val) {
    this.setState({
      num1: +val
    });
  }
  handleInput2(val) {
    this.setState({
      num2: +val
    });
  }
  handleAdd(num1, num2){
    this.setState({
      total:num1+num2
    })
  }
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" type="number" onChange={(e)=> this.handleInput(e.target.value)}/>
        <input className="inputLine" type="number" onChange={(e)=> this.handleInput2(e.target.value)}/>
        <button onClick={()=>this.handleAdd(this.state.num1, this.state.num2)}>ADD</button>
        <span className="resultsBox">Sum: {this.state.total}</span>
      </div>
    );
  }
}
