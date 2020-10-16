import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const LoginFooter = ({children}) => {
  return (
    <footer className="login-form-footer">
      {children}
    </footer>
  )
}

LoginFooter.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.node, PropTypes.arrayOf(PropTypes.node)]
  ).isRequired
}

export default LoginFooter;