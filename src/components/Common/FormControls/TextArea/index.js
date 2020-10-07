import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '../FormControlBase';
import FormControlLabel from '../FormControlLabel';
import './index.css';

const TextArea = ( { id, inputLabel, value, onChange } ) => {
  return (
    <FormControl>
      <FormControlLabel id={id}> {inputLabel} </FormControlLabel>
      <textarea 
        id={id} 
        value={value} 
        onChange={onChange}
        tabIndex="0"
      />
    </FormControl>
  );
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TextArea;

