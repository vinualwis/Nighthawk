import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const LaneButton = ({text}) => {
  return (
    <button className="lane-button">
      <FontAwesomeIcon icon={faPlus}/>
      {text}
    </button>
  )
}

LaneButton.propTypes = {
  text: PropTypes.string
}

export default LaneButton;