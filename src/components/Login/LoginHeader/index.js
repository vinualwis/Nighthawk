import React from 'react';
import PropTypes from 'prop-types';
import AppLogo from '../../AppLogo';
import './index.css';

const LoginHeader = ({children}) => {
  return (
    <header className="login-header"> 
      <AppLogo/>
      {children}
    </header>
  )
}

LoginHeader.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.node, PropTypes.arrayOf(PropTypes.node)]
  ).isRequired
}

export default LoginHeader;