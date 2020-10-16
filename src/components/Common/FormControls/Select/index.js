import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../FormControlBase';
import FormControlLabel from '../FormControlLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './index.css';

class Select extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      selected: props.initialValue || 'option0',
    }
  }

  outSideClickListener = (event) => {
    if(document.getElementById(this.props.id) && !document.getElementById(this.props.id).contains(event.target) && !this.state.hidden){
      this.closeDropDown();
    }
  }

  componentDidMount() {
    document.addEventListener("click",this.outSideClickListener);  
    // Make sure that this is the correct place to do this
    if(this.props.initialValue){
      console.log(`ul > #${this.props.initialValue}`);
      document.querySelector(`#${this.props.id} .selected-option-label`).innerHTML = document.querySelector(`ul > #${this.props.initialValue}`).innerHTML; 
      document.getElementById(this.props.initialValue).setAttribute('aria-selected',true);
    } 
  }

  componentWillUnmount(){
    document.removeEventListener("click",this.outSideClickListener,false);
  }
  
  toggleDropdown = () => {
    this.setState((prevState) => ({
      hidden: !prevState.hidden
    }));
  }

  openDropdown = () => {
    this.setState({
      hidden: false
    });
    document.querySelector(`#${this.props.id} #${this.state.selected}`).focus();
  }

  closeDropDown = () => {
    this.setState({
      hidden: true
    });
    document.querySelector(`#${this.props.id} .selected-option`).focus();
  }

  onSelectClick = (event) => {
    event.preventDefault();
    this.toggleDropdown();
  }

  onKeyDownHandler = (event) => {
    switch(event.key) {
      case 'Enter':
        event.preventDefault(); 
        this.toggleDropdown();
        break;
      case 'ArrowDown':
        this.openDropdown();
        break;
      case 'ArrowUp':
        this.closeDropDown();
        break;
    }
  }

  selectOption = (optionElement) => {
    this.setState({
      selected: optionElement.id,
    });
    this.props.onChangeHandler(optionElement.id);
    this.closeDropDown();
    // Check if there is a more cleaner way to achieve this in React
    document.querySelector(`#${this.props.id} .selected-option-label`).innerHTML = optionElement.innerHTML; 
    document.querySelectorAll(`#${this.props.id} .options li`).forEach((element) => {
      if (element.id === optionElement.id) {
        optionElement.setAttribute('aria-selected','true');
      }
      else {
        element.removeAttribute('aria-selected');
      }
    });
  }

  onOptionClick = (event) => {
    event.preventDefault();
    this.selectOption(event.target);
  }

  onOptionKeyDown = (event) => {
    event.preventDefault();
    switch(event.key){
      case 'Enter':
        this.selectOption(event.target);
        break;
      case 'ArrowDown':
        event.target.nextSibling && event.target.nextSibling.focus();
        break;
      case 'ArrowUp':
        event.target.previousSibling && event.target.previousSibling.focus();
        break;
    }
  }
  
  //When the button is clicked the dropdown should either collapse or expand
  render() {
    const { hidden } = this.state;
    const { id, selectLabel} = this.props;
    return (
      <FormControl>
        <div id={id} className="dropdown">
          <FormControlLabel id="dropdown-label"> {selectLabel} </FormControlLabel>
          <div className="dropdown-input">
            <button 
              id="dropdown-button" 
              className="selected-option" 
              aria-haspopup="listbox" 
              aria-labelledby="dropdown-label dropdown-button"
              onClick={this.onSelectClick}
              onKeyDown={this.onKeyDownHandler}
              tabIndex="0"
            >
              <span className="selected-option-label"></span>
              <FontAwesomeIcon icon={faCaretDown} className={!hidden ? 'expand': ''}/>
            </button>
            <ul className={`options ${hidden && 'hidden'}`} role="listbox" aria-labelledby="dropdown-label">
              {React.Children.map(this.props.children, (child,index) => {
                return React.cloneElement(child, {
                  index: index,
                  onClickHandler: this.onOptionClick,
                  onKeyDownHandler: this.onOptionKeyDown
                });
              })}
            </ul>
          </div>
        </div>
      </FormControl>
    )
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  selectLabel: PropTypes.string.isRequired,
  children: PropTypes.oneOfType(
    [PropTypes.node, PropTypes.arrayOf(PropTypes.node)]
  ).isRequired,
  onChangeHandler: PropTypes.func.isRequired
}

export default Select;