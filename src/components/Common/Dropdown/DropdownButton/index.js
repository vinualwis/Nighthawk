import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const DropDownButton = ({children, clickHandler}) => {
  return (
    <button className="dropdown-button" onClick={clickHandler}>
      {children}
    </button>
  )
}

DropDownButton.propTypes = {
  children: PropTypes.node.isRequired,
  clickHandler: PropTypes.func.isRequired
}

export default DropDownButton;