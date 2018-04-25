import React, { Component } from 'react';
import './App.css';
import User from './User/User';

class App extends Component {
  state = {
    users: [
      { name: 'Dan', gender: 'male'},
      { name: 'Rachel', gender: 'female'}
    ],
    showUsers: false,
  }

  checkFullNamehandler = (newName) => {
    //console.log('button clicked');
    this.setState({users:[
      { name: newName, gender: 'male'},
      { name: 'Rachel M', gender: 'female'},
      { name: 'Bill J', gender: 'male'},
    ]});
  }

  changeGenderHandler = (event) => {
    this.setState(
      {users:[
        { name: 'Kevin', gender: 'male' },
        { name: 'Rachel', gender: event.target.value },
        { name: 'Bill', gender: 'male' },
      ]}
    );
  }

  toggleUsersHandler = () => {
    const ableShow = this.state.showUsers;
    this.setState({showUsers: !ableShow})
  }

  render() {

    const changeStyle = {
      color: 'blue',
      padding: '5px',
    };

    return (
      <div className="App">
        <h1>React JSX</h1> 
        { 
          this.state.showUsers === true ?
            <div> 
              <User 
                name={this.state.users[0].name} 
                gender={this.state.users[0].gender}/>
              <User 
                name={this.state.users[1].name} 
                gender={this.state.users[1].gender}
                changeGender = {this.changeGenderHandler}
                updateNameClick={this.checkFullNamehandler.bind(this,'HHHHHH')}>
                  Email: rachel@gmail.com
              </User>
            </div> : null
          }
        <button style={changeStyle}
          onClick={this.toggleUsersHandler}>
            Toggle to show/hide user
        </button>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'React JSX'));
  }
}

export default App;
