import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const DropDownList = ({children,visible}) => {
  return (
    <ul className={`dropdown-list ${!visible && 'hidden'}`}>
      {children}
    </ul>
  )
}

DropDownList.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType(
    [PropTypes.node, PropTypes.arrayOf(PropTypes.node)]
  ).isRequired
}

export default DropDownList;