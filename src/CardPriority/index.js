import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

const CardPriority = ({priority}) => {
  return (
    <div className="priority-indicator" title={priority}> 
      <FontAwesomeIcon icon={faArrowCircleUp} className={priority}/>
      <span className="priority-text">High</span>
    </div>
  )
}

export default CardPriority;