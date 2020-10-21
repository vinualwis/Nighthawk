import React from 'react';
import PropTypes from 'prop-types';
import DropDownButton from './DropdownButton';
import DropDownList from './DropDownList';
import './index.css';

class Dropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hidden: true
    }
    this.firstItem = React.createRef();
  }

  outSideClickListener = (event) => {
    if (document.getElementById(this.props.id) && !document.getElementById(this.props.id).contains(event.target) && !this.state.hidden) {
      this.closeDropDown();
    }
  }

  componentDidMount(){
    document.addEventListener('click',this.outSideClickListener);
  }

  componentDidUpdate(){
    if(!this.state.hidden){
      this.firstItem.current && this.firstItem.current.focus();
    }
  }
  
  componentWillUnmount(){
    document.removeEventListener('click',this.outSideClickListener);
  }

  toggleVisible = () => {
    this.setState(prevState => {
      return {
        hidden: !prevState.hidden
      }
    });
  }

  closeDropDown = () => {
    this.setState({
      hidden: true
    });
  }

  onOptionKeyDown = (event) => {
    switch(event.key){
      case 'Enter':
        event.target.click();
        break;
      case 'ArrowDown':
        event.target.nextSibling && event.target.nextSibling.focus();
        break;
      case 'ArrowUp':
        event.target.previousSibling && event.target.previousSibling.focus();
        break;
    }
  }

  render(){
    const { id, buttonContent } = this.props;
    const { hidden } = this.state;
    return(
      <div className="dropdown-menu" id={id}> 
        <DropDownButton clickHandler={this.toggleVisible}>
          {buttonContent}
        </DropDownButton>
        <DropDownList visible={!hidden} ref={this.firstItem}>
          {React.Children.map(this.props.children, (child,index) => {

              return React.cloneElement(child, {
                index: index,
                keyHandler: this.onOptionKeyDown,
                id:`${id}-${index}`,
                ...child.props
              });
          })}
        </DropDownList>
      </div>
    )
  }
}

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  buttonContent: PropTypes.node.isRequired
}

export default Dropdown;