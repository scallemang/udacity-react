import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateNewItem extends Component {
  render() {
    return(
    	<form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
    )
  }
}

export default CreateNewItem;