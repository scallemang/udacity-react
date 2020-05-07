import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
    numQuestions: 0,
    numCorrect: 0,
  }

    this.state.proposedAnswer = Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3;
  }
  
  checkAnswer = (a) => {
    this.setState( (currentState) => ({
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100),
      value3: Math.floor(Math.random() * 100),
      numQuestions: currentState.numQuestions +1,
      numCorrect: (a === ( currentState.proposedAnswer === currentState.value1 + currentState.value2 + currentState.value3) )
        ? currentState.numCorrect + 1
        : currentState.numCorrect,
    }));
    this.setState( (currentState) => ({
      proposedAnswer: Math.floor(Math.random() * 3) + currentState.value1 + currentState.value2 + currentState.value3,
    }));
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={ () => this.checkAnswer(true) }>True</button>
          <button onClick={ () => this.checkAnswer(false) }>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
