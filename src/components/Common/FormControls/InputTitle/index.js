/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '../FormControlBase';
import './index.css';

const InputTitle = React.forwardRef(({value, onChangeHandler, ...rest},ref) => {
  return (
    <FormControl >
      <input 
        type="text" 
        className="input-title" 
        value={value} 
        onChange={onChangeHandler}
        ref={ref} 
        {...rest}
      />
      <div className="under-line"/>
    </FormControl>
  )
});

InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
}

export default InputTitle;