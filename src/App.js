import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //Define our initial state
  state= {
    cohortName: 'Tarjan',
    salutation: 'Hello!',
    name: 'Kieran',
    whereILive: 'Minneapolis',
    pizzaTopping: 'Sausage',
  }
  render() {
    return (
      <div>
        <h1>{this.state.cohortName} learns state with objects</h1>
    <div>{this.state.salutation} </div>
    <ul>
      <li> My name is {this.state.name}</li>
    <li>I live in {this.state.whereILive}</li>
    <li>My favorite pizza topping is {this.state.pizzaTopping}</li>
    </ul>
      </div>
    )
  }
}

export default App;
