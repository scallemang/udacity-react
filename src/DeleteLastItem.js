import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DeleteLastItem extends Component {  
  static propTypes = {
    handleDelete: PropTypes.func.isRequired, 
    buttonDisabled: PropTypes.func.isRequired, 
  }
  
  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };
  
  render() {
    return(
    	<button onClick={this.props.handleDelete} disabled={this.props.buttonDisabled()}>
          Delete Last Item
        </button>  
    )
  }
}

export default DeleteLastItem;