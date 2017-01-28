import React, { Component } from 'react';
import logo from './logo.svg';
import redShoe from './assets/red-shoe.jpg';
import blueShoe from './assets/blue-shoe.jpg';
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
        <table className="Table">
          <tbody>
            <tr>
              <th> criteria </th>
              <th> red shoe </th>
              <th> Blue show</th>
            </tr>
            <tr>
              <td> price </td>
              <td> 10 $ </td>
              <td> 20 $ </td>
            </tr>
            <tr>
              <td> photo </td>
              <td> <img className="Photo" src={redShoe} alt="shoe" /> </td>
              <td> <img className="Photo" src={blueShoe} alt="shoe"/> </td>
            </tr>
            <tr>
              <td> your vote </td>
              <td> <button> + 1 </button> </td>
              <td> <button> + 1 </button> </td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
