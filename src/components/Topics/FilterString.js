import React, { Component } from "react";

export default class FilterString extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unFilteredArray: ["Mango", "Poppy", "Rumble"],
      userInput: "",
      filteredArray: []
    };
  }
  handleInput(val) {
    this.setState({
      userInput: val
    });
  }

  handleClick(input) {
    var names = this.state.unFilteredArray.slice();
    let filteredArray=[];   
    names.forEach((e)=> {
        if(e.includes(input))
         filteredArray.push(e)
    } )
      this.setState({
          filteredArray:filteredArray
      })
  
  }
  render() {
      console.log(this.state)
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText" value={this.state.unFilteredArray}>Names: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
        <input
          type=""
          className="inputLine"
          onChange={e => this.handleInput(e.target.value)}
        />
        <button
          type=""
          className="confirmationButton"
          onClick={() => this.handleClick(this.state.userInput)}
        >Filter</button>
        <span
          className="resultsBox filterStringRB"
          value={this.state.filteredArray}
        >Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    );
  }
}
