import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import InputTitle from '../Common/FormControls/InputTitle';
import TextArea from '../Common/FormControls/TextArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Need to be moved to a library
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';

class AddBoardForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
    this.titleInputRef = React.createRef();
  }

  componentDidMount(){
    this.titleInputRef.current.focus();
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    });
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const {name, description} = this.state;
    this.props.modalSubmitHandler(name,description);
  }

  render() {
    const { name, description } = this.state;
    return(
      <form id="add-board-form" onSubmit={this.onSubmitHandler}>
        <InputTitle
          id="title" 
          value={name}
          onChange={this.onNameChange}
          type='text'
          placeholder="Add board name"
          ref={this.titleInputRef}
          required
        />
        <TextArea
          id="description"
          inputLabel={
            <span className="description-label"> 
              <FontAwesomeIcon icon={faAlignLeft}/>
              Description
            </span>
          }
          value={description}
          onChange={this.onDescriptionChange}
          required
        />
      </form>
    )
  }
}

AddBoardForm.propTypes = {
  modalSubmitHandler: PropTypes.func.isRequired
}

export default AddBoardForm;