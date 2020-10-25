import React from 'react';
import Proptypes from 'prop-types';
import './index.css';
import Modal from '../Common/Modal/index.js';
import ModalOverlay from '../ModalOverlay/index.js';
import ModalFooter from '../Common/Modal/ModalFooter';
import BaseButton from '../Common/Button';
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
  closeModal: Proptypes.func.isRequired,
  addBoardHandler: Proptypes.func.isRequired
}

export default AddBoardModal;