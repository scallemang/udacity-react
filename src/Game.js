import React, { Component } from 'react'

class Game extends Component {
  state = {
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
  };
  render() {
    return(
        <div>
			<div className="equation">
          	  <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
      		</div>
       		<button onClick={ () => this.checkAnswer(true) }>True</button>
      		<button onClick={ () => this.checkAnswer(false) }>False</button>
		</div>
	)
  }
}

export default Game;