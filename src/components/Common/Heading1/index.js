import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Heading1 = ({children}) => {
  return (
    <h1>
      {children}
    </h1>
  )
}

Heading1.propTypes = {
  children: PropTypes.node.isRequired
}

export default Heading1;