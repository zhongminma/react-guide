import React, { Component } from 'react';
import './App.css';
import User from './User/User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React JSX</h1>  
        <User />
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'React JSX'));
  }
}

export default App;
