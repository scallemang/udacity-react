import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const ItemList = props => (
	<ol className="item-list">
      {props.items.map((item, index) => <Item key={ index } item={ item } />)}
    </ol> 
)


ItemList.propTypes = {
    items: PropTypes.array.isRequired, 
}

export default ItemList;