import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor(){
        super();

      this.state={
        evenArray:[],
        oddArray: [],
        userInput: ''
      }
    }
    handleChange(val){
        this.setState({userInput:val});
        
    }

    splitArrays(arr){
        this.setState({evenArray:});
        this.setState({oddArray:});
    }


    render() {
        return (
            <div className = 'puzzleBox evenAndOddPB'>
                <h4></h4>
                <input className="inputLine" onChange = {(e)=> this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick = {()=> this.splitArrays(arr) }></button>
                <span className="resultsBox" ></span>
                <span className="resultsBox"></span>
            </div> 
            
        )
    }
}