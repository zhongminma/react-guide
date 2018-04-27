import React, { Component } from 'react';
//import './App.css';
import classes from './App.css';
import User from './User/User';

class App extends Component {
  state = {
    users: [
      { id: 'a001', name: 'Dan', gender: 'male' },
      { id: 'a002', name: 'Rachel', gender: 'female' },
      { id: 'a003', name: 'Bill', gender: 'male' },
    ],
    showUsers: false
  }

  // checkFullNamehandler = (newName) => {
  //   //console.log('button clicked');
  //   this.setState({users:[
  //     { name: newName, gender: 'male'},
  //     { name: 'Rachel M', gender: 'female'},
  //     { name: 'Bill J', gender: 'male'},
  //   ]});
  // }

  changeGenderHandler = (event, id) => {
    const findUserIndex = this.state.users.findIndex(u => {
      return u.id === id;
    });
    // this is not recommend since belows mutate the state directly
    /* const findUser = this.state.users[findUserIndex]; */
    // ... to operate JS object as it's reference value and then assign.

    const findCurrentUser = {
      ...this.state.users[findUserIndex]
    };
    //const findCurrentUser = Object.assign({}, this.state.users[findUserIndex]);
    findCurrentUser.gender = event.target.value;
    // findCurrentUser.gender = event.target.value;
    const users = [...this.state.users];
    users[findUserIndex] = findCurrentUser;
    // set updated user with following updated users object
    this.setState({ users: users });
  }

  deleteUserHandler = (userIndex) => {
    //const users = this.state.users.slice();
    const users = [...this.state.users];
    users.splice(userIndex, 1);
    this.setState({ users: users });
  }

  toggleUsersHandler = () => {
    const ableShow = this.state.showUsers;
    this.setState({ showUsers: !ableShow })
  }

  render() {
    // should move all const/let in the top, like 'style'
    // Else you might got 'undefined' error 
    const changeStyle = {
      color: 'blue',
      padding: '5px',
      backgroundColor: 'white',
    };

    let h1Class = ['user-h1-color', 'user-h1-font'].join(' ');
    let ableShowUsers = null;

    if (this.state.showUsers) {
      ableShowUsers = (
        <div>
          <p className={h1Class}>Personal Information</p>
          {this.state.users.map((u, index) => {
            return <User
              clickToAction={() => this.deleteUserHandler(index)}
              name={u.name}
              gender={u.gender}
              key={u.id}
              changeGender={(event) => this.changeGenderHandler(event, u.id)}
            />
          }
          )}
        </div>
      );
      changeStyle.backgroundColor = 'green';

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

    // change <h1> styling based on user.list.length
    const dynamicClass = [];
    if (this.state.users.length >= 2) {
      dynamicClass.push( classes.userH1Color );
    } else if (this.state.users.length < 2) {
      dynamicClass.push( classes.userH1Font );
    }

    return (
      <div className={classes.App}>
        <h1 className={dynamicClass.join(' ')}>React JSX</h1>
        {ableShowUsers}
        <button
          style={changeStyle}
          onClick={this.toggleUsersHandler}>
          Toggle to show/hide user
        </button>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'React JSX'));
  }
}

export default App;
