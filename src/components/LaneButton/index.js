import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const LaneButton = ({text, openModal}) => {
  return (
    <button className="toolbar-button" onClick={openModal}>
      <FontAwesomeIcon icon={faPlus} style={{marginRight: '8px'}}/>
      {text}
    </button>
  )
}

LaneButton.propTypes = {
  text: PropTypes.string,
  openModal: PropTypes.func
}

export default LaneButton;