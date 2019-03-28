import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={name:'chris'}
  }
  render() {
    return (
      <div className="App">
       {this.state.name}
      </div>
    );
  }
}

export default App;
