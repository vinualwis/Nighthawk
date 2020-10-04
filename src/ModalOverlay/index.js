import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const ModalOverlay = ({hidden, closeModal}) => {
  return <div className={`modal-overlay ${hidden && 'hidden'}`} onClick={closeModal}></div>;
}

ModalOverlay.propTypes = {
  hidden: PropTypes.bool,
  closeModal: PropTypes.func,
}

export default ModalOverlay;