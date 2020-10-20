import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const DropdownItem = ({children, clickHandler, keyHandler}) => {
  return (
    <li className="drop-down-item" onClick={clickHandler} role="menu-item" tabIndex="0" onKeyDown={keyHandler}>
      {children}
    </li>
  )
}

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  clickHandler: PropTypes.func.isRequired,
  keyHandler: PropTypes.func.isRequired
}


export default DropdownItem;