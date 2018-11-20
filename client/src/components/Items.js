import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Items = ({ items }) => (
  <ul>
    {items.map(item => (
      <Item key={item.id} {...item} />
    ))}
  </ul>
);

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Items;
