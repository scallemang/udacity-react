import React from 'react';
import PropTypes from 'prop-types';

const DeleteLastItem = props => (

  <button onClick={props.handleDelete} disabled={props.buttonDisabled()}>
	Delete Last Item
  </button>  
);

  
DeleteLastItem.propTypes = {
    handleDelete: PropTypes.func.isRequired, 
    buttonDisabled: PropTypes.func.isRequired, 
} 

export default DeleteLastItem;