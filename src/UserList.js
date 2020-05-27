import React, { Component } from 'react';

class UserList extends Component {
  render() {
   	return(
      <div>
      	<h2>Users</h2>
      	<ul>
        { this.props.users.map( user => (
         	<li key={user.username}>{user.username}</li> 
        ) ) }
  		</ul>
      </div>
    )
  }
}

export default UserList;