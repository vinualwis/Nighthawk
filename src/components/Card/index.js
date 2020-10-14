import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import CardContent from '../CardContent/index.js';

const Card = ({id, cardTitle, category, priority, onCardClickHandler}) => {
  return (
    <article 
      id={id} 
      key={id} 
      className="card" 
      onClick={(e) => {
        e.preventDefault();
        onCardClickHandler(id);
      }}
    >
      <CardContent cardTitle={cardTitle} priority={priority} category={category}/>
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.string,
  cardTitle: PropTypes.string,
  category: PropTypes.oneOf(['story','epic','feature','bug']),
  priority: PropTypes.oneOf(['low','medium','high']),
  onCardClickHandler: PropTypes.func.isRequired
}

export default Card;