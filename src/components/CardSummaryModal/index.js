import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Common/Modal/index.js';
import ModalOverlay from '../ModalOverlay/index.js';
import ModalHeader from '../Common/Modal/ModalHeader/index.js';
import ModalFooter from '../Common/Modal/ModalFooter';
import BaseButton from '../Common/Button/index.js';
import AddCardForm from '../AddCardForm/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Need to be moved to a library
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './index.css';

class CardSummaryModal extends Component {

  constructor() {
    super();
  }

  modalFormSubmit= (updatedCardDetails) => {
    this.props.editCardHandler({
      id: this.props.cardContent.id,
      position: this.props.cardContent.position,
      previousLane: this.props.cardContent.lane,
      ...updatedCardDetails
    });
    this.props.closeModal();
  }

  cardDelete = () => {
    this.props.deleteCardHandler(this.props.cardContent);
    this.props.closeModal();
  }

  render() {
    const { hidden, closeModal, cardContent } = this.props;
    return (
      <React.Fragment>
        <ModalOverlay hidden={hidden} closeModal={closeModal} />
        <Modal hidden={hidden}>
          <ModalHeader>
            <div className="modal-description"> 
              <h2>{cardContent.id}</h2>
            </div>
            <BaseButton onClickHandler={closeModal}>
              <FontAwesomeIcon icon={faTimes}/>
            </BaseButton>
          </ModalHeader> 
          <AddCardForm initialContent={cardContent} modalFormSubmit={this.modalFormSubmit}/>
          <ModalFooter>
            <div className="modal-actions-container">
              <BaseButton onClickHandler={this.cardDelete}>Delete Card</BaseButton>
              <BaseButton onClickHandler={closeModal}>Cancel</BaseButton>
              <BaseButton type='submit' form='add-card-form'>Save</BaseButton>
            </div>
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
  cardContent: PropTypes.object.isRequired,
  editCardHandler: PropTypes.func.isRequired,
  deleteCardHandler: PropTypes.func.isRequired
}

export default CardSummaryModal;