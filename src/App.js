import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
      const text = this.state.userInput.split('');
      text.splice(index, 1);
      const updatedUserInput = text.join('');
      this.setState({userInput: updatedUserInput });
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
            character={ch} 
            key={index}
            clicked={() => this.deleteCharHandler(index)}
            />;
    });

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <h1>Welcome to React App</h1>
        <h2>From Main component</h2>
        <Person /> */}
        <ol>
          <li>
              Dive in and learn React.js from scratch!
          </li>
          <li>
              Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!
          </li>
        </ol>
        <input type='text' onChange={this.inputChangedHandler} value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', '', 'Welcome to React App'));
  }
}

export default App;
