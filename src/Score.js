import React, { Component } from 'react'

class Score extends Component {
  state = {
    numCorrect: 0,
  };
  render() {
    return(
		<p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
        </p>
	)
  }
}

export default Score;