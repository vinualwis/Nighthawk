import React from 'react';
import './index.css';
import Proptypes from 'prop-types';

const LoginAction = ({children, ...rest}) => {
  return (
    <button className='sign-up-action' {...rest}>
      {children}
    </button>
  )
}

LoginAction.propTypes = {
  children: Proptypes.node.isRequired,
}

export default LoginAction;