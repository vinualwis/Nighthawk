import React from 'react';
import PropTypes from 'prop-types';
import PriorityIcon from './CardPriorityIcon';
import './index.css';

const CardPriority = ({priority}) => {
  return (
    <div className="priority-indicator" title={priority}> 
      <PriorityIcon priority={priority}/>
      <span className="priority-text">{priority.toUpperCase()}</span>
    </div>
  )
}

CardPriority.propTypes = {
  priority: PropTypes.oneOf(['low','medium','high'])
}

export default CardPriority;