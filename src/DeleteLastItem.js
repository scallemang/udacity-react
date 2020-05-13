import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DeleteLastItem extends Component {
  render() {
    return(
    	<button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>  
    )
  }
}

export default DeleteLastItem;