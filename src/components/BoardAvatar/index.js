import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const BoardAvatar = ({title,color}) => {
  return (
    <span className="board-avatar" style={{backgroundColor: color}}>
      {title.charAt(0)}
    </span>
  )
}

BoardAvatar.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default BoardAvatar;