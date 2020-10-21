import React,{useEffect,useRef} from 'react';
import PropTypes from 'prop-types';
import './index.css';

const DropdownItem = ({children, clickHandler, keyHandler,id, isFocused}) => {
  const reference = useRef(null);
  useEffect(
    () => {
      //Initialises focus to be focused on the first item in the dropdown list
      isFocused && reference.current.focus();
    },
  )
  const setFocus = () => {
    reference.current.focus();
  }
  return (
    <li ref={reference} id={id} className="drop-down-item" onClick={clickHandler} role="menu-item" tabIndex="0" onKeyDown={keyHandler} onMouseEnter={setFocus}>
      {children}
    </li>
  )
}

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  clickHandler: PropTypes.func.isRequired,
  keyHandler: PropTypes.func,
  id: PropTypes.string,
  isFocused: PropTypes.bool
}


export default DropdownItem;