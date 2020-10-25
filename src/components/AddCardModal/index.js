import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Modal from '../Common/Modal/index.js';
import ModalOverlay from '../ModalOverlay/index.js';
import ModalHeader from '../Common/Modal/ModalHeader/index.js';
import ModalFooter from '../Common/Modal/ModalFooter';
import AddCardForm from '../AddCardForm/index.js';
import BaseButton from '../Common/Button/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Need to be moved to a library
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class AddCardModal extends Component {

  constructor() {
    super();
  }

  modalFormSubmit= (newCard) => {
    this.props.addCardHandler(newCard);
    this.props.closeModal();
  }

  render() {
    const { hidden, closeModal } = this.props;
    return (
      <React.Fragment>
        <ModalOverlay hidden={hidden} closeModal={closeModal} />
        <Modal hidden={hidden}>
          <ModalHeader>
            <div className='modal-description'> 
              <h2>New Card</h2>
              <p>Please fill out the following required details.</p>
            </div>
            <BaseButton onClickHandler={closeModal}>
              <FontAwesomeIcon icon={faTimes}/>
            </BaseButton>
          </ModalHeader> 
          <AddCardForm modalFormSubmit={this.modalFormSubmit}/>
          <ModalFooter>
            <div className="modal-actions-container">
              <BaseButton onClickHandler={closeModal}>Cancel</BaseButton>
              <BaseButton type='submit' form='add-card-form'>Save</BaseButton>
            </div>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    )
  }
}

AddCardModal.propTypes = {
  hidden: PropTypes.bool,
  closeModal: PropTypes.func,
  addCardHandler: PropTypes.func,
}

export default AddCardModal;