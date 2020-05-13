import React, { Component } from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class ItemList extends Component {
  render() {
    return(
    	<ol className="item-list">
          {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol> 
    )
  }
}

export default ItemList;