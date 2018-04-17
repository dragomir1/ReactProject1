import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'
import './App.css';

class App extends Component {

  state = {
    name: "Michael"
  };

  nameChangedHandler = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Hello React</h1>
      <UserOutput name={this.state.name} />
      <UserInput
      changed={this.nameChangedHandler.bind(this)}
      currentName={this.state.name}/>
      </div>
    );
  }
}

export default App;
