import React, { Component } from 'react';
import './App.css';
import User from './User/User';

class App extends Component {
  state = {
    users: [
      { id: 'a001', name: 'Dan', gender: 'male'},
      { id: 'a002', name: 'Rachel', gender: 'female'},
      { id: 'a003', name: 'Bill', gender: 'male'},
    ],
    showUsers: false,
  }

  // checkFullNamehandler = (newName) => {
  //   //console.log('button clicked');
  //   this.setState({users:[
  //     { name: newName, gender: 'male'},
  //     { name: 'Rachel M', gender: 'female'},
  //     { name: 'Bill J', gender: 'male'},
  //   ]});
  // }

  changeGenderHandler = (event) => {
    this.setState(
      {users:[
        { name: 'Kevin', gender: 'male' },
        { name: 'Rachel', gender: event.target.value },
        { name: 'Bill', gender: 'male' },
      ]}
    );
  }

  deleteUserHandler = (userIndex) => {
    //const users = this.state.users.slice();
    const users = [...this.state.users];
    users.splice(userIndex, 1);
    this.setState({users: users});
  }

  toggleUsersHandler = () => {
    const ableShow = this.state.showUsers;
    this.setState({showUsers: !ableShow})
  }

  render() {
    let ableShowUsers = null;
    if(this.state.showUsers) {
      ableShowUsers = (
        <div>
          {this.state.users.map((u, index) => {
            return <User 
              clickToAction = {() => this.deleteUserHandler(index)}
              name = {u.name}
              gender = {u.gender}
              key = {u.id}
            />}
          )}
        </div>
      );

      // ableShowUsers = (
      //   <div> 
      //     <User 
      //       name={this.state.users[0].name} 
      //       gender={this.state.users[0].gender}/>
      //     <User 
      //       name={this.state.users[1].name} 
      //       gender={this.state.users[1].gender}
      //       changeGender = {this.changeGenderHandler}
      //       updateNameClick={this.checkFullNamehandler.bind(this,'HHHHHH')}>
      //         Email: rachel@gmail.com
      //     </User>
      //   </div> 
      // );     
    }

    const changeStyle = {
      color: 'blue',
      padding: '5px',
    };

    return (
      <div className="App">
        <h1>React JSX</h1> 
        {ableShowUsers}
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
