import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Modal = ({children,hidden}) => {
  return (
    <div className={`modal ${hidden && 'hidden'}`}>
      {children}
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  hidden: PropTypes.bool,
}

export default Modal;