import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Items = ({ items }) => (
  <div className='items'>
    {items.map(item => (
      <Item key={item.id} {...item} />
    ))}
  </div>
);

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Items;
