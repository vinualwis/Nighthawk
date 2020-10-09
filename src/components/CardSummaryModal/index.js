import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Modal from '../Common/Modal/index.js';
import ModalOverlay from '../ModalOverlay/index.js';
import ModalHeader from '../Common/Modal/ModalHeader/index.js';
import ModalFooter from '../Common/Modal/ModalFooter';
import BaseButton from '../Common/Button/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Need to be moved to a library
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class CardSummaryModal extends Component {

  constructor() {
    super();
  }

  render() {
    const { hidden, closeModal } = this.props;
    return (
      <React.Fragment>
        <ModalOverlay hidden={hidden} closeModal={closeModal} />
        <Modal hidden={hidden}>
          <ModalHeader>
            <div className='modal-description'> 
              <h2>Card Summary</h2>
            </div>
            <BaseButton onClickHandler={closeModal}>
              <FontAwesomeIcon icon={faTimes}/>
            </BaseButton>
          </ModalHeader> 
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    )
  }
}

CardSummaryModal.propTypes = {
  hidden: PropTypes.bool,
  closeModal: PropTypes.func,
  addCardHandler: PropTypes.func,
}

export default CardSummaryModal;