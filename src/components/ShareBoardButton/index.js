import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Need to be moved to a library
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const ShareBoardButton = ({onClickHandler}) => {
  return (
    <button className="share-board" onClick={onClickHandler}>
      <FontAwesomeIcon icon={faUserPlus}/>
    </button>
  )
}

ShareBoardButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired
}

export default ShareBoardButton;