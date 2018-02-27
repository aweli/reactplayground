import React, { Component } from 'react';
import $ from 'jquery';
import UserList from './components/UserList';
import Link from './components/Link';

class App extends Component {

  constructor() {
    super();
    this.state = {users : [] };
    }

  getUsers() {
    $.getJSON('https://jsonplaceholder.typicode.com/users', [], function(data) {
      this.setState({users : data}, function(){
        console.log(this.state);
      });
    }.bind(this));
  }

  componentWillMount() {
    this.getUsers();
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="App">
      <h3>userlist</h3>
       <UserList users={this.state.users}/>
       <Link/>
      </div>
    );
  }
}

export default App;
