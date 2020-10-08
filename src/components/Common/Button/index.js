import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const BaseButton = ({children, onClickHandler, ...rest}) => {
  return (
    <button className="base-button" onClick={onClickHandler} {...rest}>
      <span className="button-content">
        {children}
      </span>
    </button>
  )
}

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClickHandler: PropTypes.func
}

export default BaseButton;

