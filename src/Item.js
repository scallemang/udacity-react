import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  static propTypes = {
    item: PropTypes.string.isRequired, 
  }
  
  render() {
    return(
      <li>{ this.props.item }</li> 
    )
  }
}

export default Item;