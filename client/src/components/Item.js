import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ text }) => (
  <li>{text}</li>
);

Item.propTypes = {
  text: PropTypes.string.isRequired
};

export default Item;
