import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const SelectItem = ( { id, children, onClickHandler, onKeyDownHandler } ) => {
  return (
    <li 
      tabIndex="0" 
      id={id} 
      role="option"
      onClick={onClickHandler}
      onKeyDown={onKeyDownHandler}
      className="select-item"
    >
      {children}
    </li>
  )
}

SelectItem.propTypes = {
  id: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
  onKeyDownHandler: PropTypes.func,
  children: PropTypes.oneOfType(
    [PropTypes.node, PropTypes.arrayOf(PropTypes.node)]
  )
}

export default SelectItem;