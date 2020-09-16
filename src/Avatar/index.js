import React from 'react';
import './index.css';

const Avatar = ({firstname,lastname}) => {
  return (
    <span className="avatar">
      {`${firstname.charAt(0)}${lastname.charAt(0)}`}
    </span>
  )
}

export default Avatar;