import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const FormControlLabel = ( { children, id } ) => {
  return (
    <label className="form-control-label" htmlFor={id}>
      {children}
    </label>
  )
}

FormControlLabel.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}

export default FormControlLabel;

