import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import CardCategory from '../CardCategory/index.js';
import CardContent from '../CardContent/index.js';

const Card = ({id, cardTitle,category,priority}) => {
  return (
    <article key={id} className="card">
      <CardCategory category={category}/>
      <CardContent cardTitle={cardTitle} priority={priority}/>
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  cardTitle: PropTypes.string,
  category: PropTypes.oneOf(['story','epic','feature','bug']),
  priority: PropTypes.oneOf(['low','medium','high'])
}

export default Card;