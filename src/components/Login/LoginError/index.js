import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import errors from '../../../constants/errors';

const LoginError = ({error}) => {
  return (
    <div className="login-error-container">
      {errors[error]}
    </div>
  )
}

LoginError.propTypes = {
  error: PropTypes.string.isRequired
}

export default LoginError;