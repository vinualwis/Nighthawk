import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '../FormControlBase/index.js';
import FormControlLabel from '../FormControlLabel/index.js';

const TextInput = ( { id, inputLabel, value, onChange } ) => {
  return (  
    <FormControl>
      <FormControlLabel id={id}>
        {inputLabel}
      </FormControlLabel>
      <input id={id} value={value} type="text" onChange={onChange} tabIndex='0'/>
    </FormControl>
  )
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TextInput;

