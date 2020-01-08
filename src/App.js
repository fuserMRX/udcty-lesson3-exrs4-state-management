import React, { Component } from 'react';
import Calculation from './Calculation';
import Score from './Score';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = this.getInitialState();

  basicStateValues() {
    return {
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100),
      value3: Math.floor(Math.random() * 100),
      get proposedAnswer() { return Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3 },
    }
  }

  getInitialState() {
    let scoreValues = {
      numQuestions: 0,
      numCorrect: 0,
    }
    let fullArr = Object.assign(this.basicStateValues(), scoreValues);
    return fullArr;
  }

  checkAnswerAndReset = () => {
    let basicStateValuesObj = this.basicStateValues();
    let valueSum = this.state.value1 + this.state.value2 + this.state.value3;
    this.setState((prevState) => {
      let stateObj = {};
      stateObj.numQuestions = prevState.numQuestions + 1;
      if (this.state.proposedAnswer === valueSum) {
        stateObj.numCorrect = prevState.numCorrect + 1;
      }
      return Object.assign(basicStateValuesObj, stateObj);
    })
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
          <Calculation value1={this.state.value1} value2={this.state.value2} value3={this.state.value3} proposedAnswer={this.state.proposedAnswer} />
          <button onClick={() => this.checkAnswerAndReset()}>True</button>
          <button onClick={() => this.checkAnswerAndReset()}>False</button>
          <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions} />
        </div>
      </div>
    );
  }
}

export default App;
