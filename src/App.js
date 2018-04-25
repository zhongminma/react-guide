import React, { Component } from 'react';
import './App.css';
import User from './User/User';

class App extends Component {
  state = {
    users: [
      { name: 'Dan', gender: 'male'},
      { name: 'Rachel', gender: 'female'}
    ]
  }

  checkFullNamehandler = () => {
    //console.log('button clicked');
    this.setState({users:[
      { name: 'Daniel K', gender: 'male'},
      { name: 'Rachel M', gender: 'female'},
      { name: 'Bill J', gender: 'male'},
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>React JSX</h1>  
        <User 
          name={this.state.users[0].name} 
          gender={this.state.users[0].gender}/>
        <User 
          name={this.state.users[1].name} 
          gender={this.state.users[1].gender}
          updateNameClick={this.checkFullNamehandler}>
            Email: rachel@gmail.com
        </User>
        <button onClick={this.checkFullNamehandler}>
          Check Full Name
        </button>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'React JSX'));
  }
}

export default App;
