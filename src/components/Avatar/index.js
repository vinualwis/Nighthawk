import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Avatar = ({firstname,lastname, uColor, isActive, ...rest}) => {
  const fullName = `${firstname} ${lastname}`;
  return (
    <span 
      className="avatar" 
      aria-label={fullName} 
      title={fullName}
      style={{borderColor: uColor, color: uColor}}
      {...rest}>
      {`${firstname.charAt(0)}${lastname.charAt(0)}`}
      {isActive && <span className="online" title='online' aria-label='online'/>}
    </span>
  )
}

Avatar.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  isActive: PropTypes.bool,
  uColor: PropTypes.string
}

export default Avatar;