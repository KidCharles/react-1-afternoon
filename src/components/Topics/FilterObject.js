import React, { Component } from 'react';

export default class FilterObject extends Component{
  constructor(props){
    super(props)
    this.state={
      employees: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],

      userInput: '',
      filteredEmployees: []
    }
  }
  handleInput(val){
    this.setState({
      userInput:val
    })
  }
  filter(input){
    var employees = this.state.employees.slice();
    var filtered = [];
    
    employees.filter((e)=>{
      if(e.hasOwnProperty(input)){
        filtered.push(e)
      }
    } )
    this.setState({ filteredEmployees: filtered });
  }
  
  render(){
    console.log(this.state)
    const {userInput}=this.state
    return(
      <div className="puzzleBox filterObjectPB">
        <h4>Object Filter</h4>
        <span className="puzzleText"> Original: {JSON.stringify(this.state.employees)}</span>
        <input className="inputLine" onChange={(e)=> this.handleInput(e.target.value)}/>
        <button className="confirmationButton" onClick={()=> this.filter(userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB">Filtered:{JSON.stringify(this.state.filteredEmployees)}</span>
      </div> 
    )
  }
}