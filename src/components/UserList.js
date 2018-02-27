import React from 'react';
import User from './User';

export default class UserList extends React.Component {

  render() {
    let userItems;

    if(this.props.users) {
      userItems = this.props.users.map(user => {
          return (
            <User key={user.email} user={user} />
          );
      });
    }

    return (
      <div>
        <h3>User List Component</h3>
        <ul>
          {userItems}
        </ul>
      </div>
    );
  }
}

//export default App;
