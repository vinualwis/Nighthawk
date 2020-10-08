import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import BaseButton from '../Common/Button/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const LaneButton = ({text, openModal}) => {
  return (
    <BaseButton onClickHandler={openModal}>
      <FontAwesomeIcon icon={faPlus} style={{marginRight: '8px'}}/>
      {text}
    </BaseButton>
  )
}

LaneButton.propTypes = {
  text: PropTypes.string,
  openModal: PropTypes.func
}

export default LaneButton;