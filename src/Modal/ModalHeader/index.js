import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

const ModalHeader = ({children}) => {
  return (
    <header>
      {children}
    </header>
  )
}

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ModalHeader;