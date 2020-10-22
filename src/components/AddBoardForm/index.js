import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import TextInput from '../Common/FormControls/TextInput';
import TextArea from '../Common/FormControls/TextArea';

class AddBoardForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
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
        <TextInput 
          id="title" 
          inputLabel="Title"
          value={name}
          onChange={this.onNameChange}
          type='text'
          required
        />
        <TextArea
          id="description"
          inputLabel="Description"
          value={description}
          onChange={this.onDescriptionChange}
          required
        />
      </form>
    )
  }
}

export default AddBoardForm;