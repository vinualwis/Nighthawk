import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Avatar = ({firstname,lastname}) => {
  return (
    <span className="avatar">
      {`${firstname.charAt(0)}${lastname.charAt(0)}`}
    </span>
  )
}

Avatar.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string
}

export default Avatar;