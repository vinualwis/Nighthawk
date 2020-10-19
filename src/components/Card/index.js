import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import CardContent from '../CardContent/index.js';

const Card = ({id, display, cardTitle, assignee, category, priority, onCardClickHandler}) => {
  return (
    <article 
      id={id} 
      key={id} 
      className="card" 
      onClick={(e) => {
        e.preventDefault();
        onCardClickHandler(id);
      }}
      style={{display: !display ? 'none' : 'block'}}
    >
      <CardContent cardTitle={cardTitle} priority={priority} category={category} assignee={assignee}/>
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.string,
  cardTitle: PropTypes.string,
  category: PropTypes.oneOf(['story','epic','feature','bug']),
  priority: PropTypes.oneOf(['low','medium','high']),
  assignee: PropTypes.string.isRequired,
  onCardClickHandler: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired
}

export default Card;