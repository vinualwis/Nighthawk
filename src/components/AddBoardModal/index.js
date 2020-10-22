import React from 'react';
import Proptypes from 'prop-types';
import './index.css';
import Modal from '../Common/Modal/index.js';
import ModalOverlay from '../ModalOverlay/index.js';
import ModalHeader from '../Common/Modal/ModalHeader/index.js';
import ModalFooter from '../Common/Modal/ModalFooter';
import BaseButton from '../Common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Need to be moved to a library
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import AddBoardForm from '../AddBoardForm';

class AddBoardModal extends React.Component {

  onModalSubmit = (name,description) => {
    this.props.addBoardHandler(name,description);
    this.props.closeModal();
  }

  render(){
    const { hidden, closeModal } = this.props;
    return (
      <React.Fragment>
        <ModalOverlay hidden={hidden} closeModal={closeModal} />
        <Modal  hidden={hidden}>
          <ModalHeader>
            <div className='modal-description'> 
              <h2>New Board</h2>
              <p>Please fill out the following details.</p>
            </div>
            <BaseButton onClickHandler={closeModal}>
              <FontAwesomeIcon icon={faTimes}/>
            </BaseButton>
          </ModalHeader> 
          <AddBoardForm modalSubmitHandler={this.onModalSubmit}/>
          <ModalFooter>
            <div className="modal-actions-container">
              <BaseButton onClickHandler={closeModal}>Cancel</BaseButton>
              <BaseButton type='submit' form='add-board-form'>Create</BaseButton>
            </div>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    )
  }
}

AddBoardModal.propTypes = {
  hidden: Proptypes.bool.isRequired,
  closeModal: Proptypes.func.isRequired
}

export default AddBoardModal;