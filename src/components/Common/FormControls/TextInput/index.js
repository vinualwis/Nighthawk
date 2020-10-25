import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '../FormControlBase/index.js';
import FormControlLabel from '../FormControlLabel/index.js';

const TextInput = ( { id, inputLabel, value, onChange, type, ...rest } ) => {
  return (  
    <FormControl>
      <FormControlLabel id={id}>
        {inputLabel}
      </FormControlLabel>
      <input className="normal-input" id={id} value={value} type={type || 'text'} onChange={onChange} tabIndex='0' {...rest}/>
    </FormControl>
  )
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
}

export default TextInput;

