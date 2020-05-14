import React, { Component } from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class ItemList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired, 
  }
  
  render() {
    return(
    	<ol className="item-list">
          {this.props.items.map((item, index) => <Item key={ index } item={ item } />)}
        </ol> 
    )
  }
}

export default ItemList;