import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from '../Common/FormControls/InputTitle';
import TextArea from '../Common/FormControls/TextArea/index.js';
import Select from '../Common/FormControls/Select';
import SelectItem from '../Common/FormControls/Select/SelectItem';
import CategoryIcon from '../CardCategory/CardCategoryIcon';
import PriorityIcon from '../CardPriority/CardPriorityIcon';
import userConfig from '../../constants/users';
import './index.css';

class AddCardForm extends Component {

  constructor(props) {
    super(props);
    let title, description, assignee, priority,category, lane;
    if (props.initialContent) {
      title = props.initialContent.title;
      description = props.initialContent.description;
      assignee = props.initialContent.assignee;
      priority = props.initialContent.priority;
      category = props.initialContent.category;
      lane = props.initialContent.lane;
    }
    this.state = {
      title: title || '',
      description: description || '',
      assignee: assignee || '',
      priority: priority || '',
      category: category || '',
      lane: lane || '',
    }
    this.cardTitleRef = React.createRef();
  }

  componentDidMount(){
    this.cardTitleRef.current.focus();
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
    const { 
      title, 
      description,
      assignee,
      priority,
      category,
      lane
    } = this.state;
    return (
      <form id="add-card-form" onSubmit={this.onSubmitHandler}>
        <InputTitle
          id="title" 
          value={title}
          onChange={this.onTitleChange}
          placeholder="Add card title"
          ref={this.cardTitleRef}
          required
        />
        <Select id="assignee" selectLabel="Assignee" initialValue={assignee} onChangeHandler={this.onAssigneeChange}>
          <SelectItem id="option0"></SelectItem>
          {Object.keys(userConfig).map((user) => {
            return (
              <SelectItem key={user} id={user}>{userConfig[user].name}</SelectItem>
            )
          })}
        </Select>
        <Select id="lane" selectLabel="Lane" initialValue={lane} onChangeHandler={this.onLaneChange}>
          <SelectItem id="option0"></SelectItem>
          <SelectItem id="backlog">Backlog</SelectItem>
          <SelectItem id="todo">Todo</SelectItem>
          <SelectItem id="inprogress">InProgress</SelectItem>
          <SelectItem id="testing">Testing</SelectItem>
          <SelectItem id="done">Done</SelectItem>
          <SelectItem id="fun">Fun</SelectItem>
        </Select>
        <Select id="priority" selectLabel="Priority" initialValue={priority} onChangeHandler={this.onPriorityChange}>
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
        <Select id="category" selectLabel="Category" initialValue={category} onChangeHandler={this.onCategoryChange}>
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
  initialContent: PropTypes.object
}

export default AddCardForm;