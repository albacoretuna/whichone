import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to WhichOne.fi</h2>
        </div>
        <p className="App-intro">
          This is a service to help you decide between alternatives, or at least make your head clear about which way to go, by collecting information and asking others.
        </p>
      </div>
    );
  }
}

export default App;
