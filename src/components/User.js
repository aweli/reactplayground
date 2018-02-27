import React from 'react';

export default class User extends React.Component {
  render() {
    return (
      <li className="User">
        {this.props.user.name} - {this.props.user.email}
      </li>
    );
  }
}

//export default User;
