import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const LoginContainer = ({children}) => {
  return (
    <div className="login-container">
      {children}
    </div>
  )
}

LoginContainer.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.node, PropTypes.arrayOf(PropTypes.node)]
  ).isRequired
}

export default LoginContainer;