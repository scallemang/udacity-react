import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddUser extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      username: '',
    },
    userExists: false,
  };

  contactExists = currUsername => {
    const users = this.props.users;
    for (let user of users) {
      if (user.username === currUsername) {
        return true;
      }
    }
    return false;
  };
  
  handleSubmit = evt => {
    evt.preventDefault();
    const userExists = this.contactExists( this.state.user.username );
    
    if (!userExists) {
      this.props.onAddUser(this.state.user);
    }

    this.setState(() => ({
      userExists,
    }));
  }

  handleInputChange = evt => {
    const { name, value } = evt.target;
    this.setState( prevState => ({
      ...prevState,
      user: {
        ...prevState.user,
      	[name]: value
      }
    }));
  }
  
  render() {
    const { firstName, lastName, username } = this.state.user;
    
    return (
      <div>
        <h1>New User</h1>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
    		  onChange={ this.handleInputChange }
			  value={ firstName }
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
    		  onChange={ this.handleInputChange }
			  value={ lastName }
            />
            <input
              type="text"
              name="username"
              placeholder="Enter username"
    		  onChange={ this.handleInputChange }
			  value={ username }
            />
          </div>
          <button /*disabled={this.isDisabled()}*/>Add</button>
        </form> 
	  </div>
    )
  }
}

export default AddUser;