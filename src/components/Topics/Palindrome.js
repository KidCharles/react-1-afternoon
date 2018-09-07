import React, { Component } from 'react';

export default class Palindrone extends Component {
    constructor(props){
        super(props)
        this.state={
            userInput:'',
            palindrone:''
        }
    }
    handleInput(val){
        this.setState({
            userInput:val
        })
    }
    handleClick(input){
        var re = /[\W_]/g;
        var lowRegStr = input.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join(''); 
        if(reverseStr === lowRegStr){
            this.setState({
                palindrone: 'true'
            })
        }else{
            this.setState({
                palindrone:'false'
            })
        }
    }
    render(){
        console.log(this.state)
        return (
            <div className="puzzleBox filterStringPB">
                <h1>Palindrone</h1>
                <input className="inputLine" onChange={(e)=> this.handleInput(e.target.value)}/>
                <button className='confirmationButton' onClick={()=> this.handleClick(this.state.userInput) } >Go!</button>
                <span className="resultsBox" value={this.state.userInput}> Palindrone: {this.state.palindrone}</span>
            </div> 
        )
    }
}