import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Heading2 = ({children}) => {
  return (
    <h2>
      {children}
    </h2>
  )
}

Heading2.propTypes = {
  children: PropTypes.node.isRequired
}

export default Heading2;