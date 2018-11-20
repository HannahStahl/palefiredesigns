import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

const Filter = ({ active, children, onClick }) => (
  <Checkbox
    onChange={onClick}
    checked={active}
    inline
  >
    {children}
  </Checkbox>
);

Checkbox.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Filter;
