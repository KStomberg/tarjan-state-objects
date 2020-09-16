import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //Define our initial state
  state= {
    cohortName: 'Tarjan',
    salutation: 'Hello!',
    name: 'Kieran'
  }
  render() {
    return (
      <div>
        <h1>{this.state.cohortName} learns state with objects</h1>
    <div>{this.state.salutation} my name is {this.state.name}</div>
      </div>
    )
  }
}

export default App;
