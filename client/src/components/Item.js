import React from 'react';
import PropTypes from 'prop-types';
import { Thumbnail } from 'react-bootstrap';

const Item = ({ title, image }) => (
  <Thumbnail href="#" alt={title} src={image} className="centered">
  </Thumbnail>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Item;
