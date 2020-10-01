import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../Common/FormControls/TextInput/index.js';
import TextArea from '../Common/FormControls/TextArea/index.js';
import Select from '../Common/FormControls/Select';
import SelectItem from '../Common/FormControls/Select/SelectItem';
import CategoryIcon from '../CardCategory/CardCategoryIcon';
import PriorityIcon from '../CardPriority/CardPriorityIcon';
import './index.css';

class AddCardForm extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      assignee: '',
      priority: '',
      category: '',
      lane: '',
    }
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  onAssigneeChange = (newValue) => {
    this.setState({
      assignee: newValue
    })
  }

  onPriorityChange = (newValue) => {
    this.setState({
      priority: newValue
    });
  }

  onCategoryChange = (newValue) => {
    this.setState({
      category: newValue
    });
  }

  onLaneChange = (newValue) => {
    this.setState({
      lane: newValue
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    const {
      title,
      description,
      assignee,
      priority,
      category,
      lane
    } = this.state;
    this.props.modalFormSubmit({
      title,
      description,
      assignee,
      priority,
      category,
      lane
    });
  }
  

  render() {
    const { title, description } = this.state;
    return (
      <form id="add-card-form" onSubmit={this.onSubmitHandler}>
        <TextInput 
          id="title" 
          inputLabel="Title"
          value={title}
          onChange={this.onTitleChange}
        />
        <Select id="assignee" selectLabel="Assignee" onChangeHandler={this.onAssigneeChange}>
          <SelectItem id="option0"></SelectItem>
          <SelectItem id="vinualwis">Vinu Alwis</SelectItem>
          <SelectItem id="benfordham">Ben Fordham</SelectItem>
          <SelectItem id="someone">Some One</SelectItem>
        </Select>
        <Select id="lane" selectLabel="Lane" onChangeHandler={this.onLaneChange}>
          <SelectItem id="option0"></SelectItem>
          <SelectItem id="backlog">Backlog</SelectItem>
          <SelectItem id="todo">Todo</SelectItem>
          <SelectItem id="inprogress">InProgress</SelectItem>
          <SelectItem id="testing">Testing</SelectItem>
          <SelectItem id="done">Done</SelectItem>
          <SelectItem id="fun">Fun</SelectItem>
        </Select>
        <Select id="priority" selectLabel="Priority" onChangeHandler={this.onPriorityChange}>
          <SelectItem id="option0"></SelectItem>
          <SelectItem id="low">
            <PriorityIcon priority='low'/>
            Low
          </SelectItem>
          <SelectItem id="medium">
            <PriorityIcon priority='medium'/>
            Medium
          </SelectItem>
          <SelectItem id="high">
            <PriorityIcon priority='high'/>
            High
          </SelectItem>
        </Select>
        <Select id="category" selectLabel="Category" onChangeHandler={this.onCategoryChange}>
          <SelectItem id="option0"></SelectItem>
          <SelectItem id="story">
            <CategoryIcon category='story'/>
            Story
          </SelectItem>
          <SelectItem id="epic">
            <CategoryIcon category='epic'/>
            Epic
          </SelectItem>
          <SelectItem id="feature">
            <CategoryIcon category='feature'/>
            Feature
          </SelectItem>
          <SelectItem id="bug">
            <CategoryIcon category='bug'/>
            Bug
          </SelectItem>
        </Select>
        <TextArea
          id="description"
          inputLabel="Description"
          value={description}
          onChange={this.onDescriptionChange}
        />
      </form>
    )
  }
}

AddCardForm.propTypes = {
  modalFormSubmit: PropTypes.func.isRequired,
}

export default AddCardForm;