import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const ModalFooter = ({children}) => {
  return (
    <footer>
      {children}
    </footer>
  );
}

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ModalFooter;