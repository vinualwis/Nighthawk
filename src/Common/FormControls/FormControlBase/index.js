import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const FormControl = ( { children } ) => {
  return (
    <div className="form-control"> 
      {children}
    </div>
  )
}

FormControl.propTypes = {
  children: PropTypes.node.isRequired
}

export default FormControl;