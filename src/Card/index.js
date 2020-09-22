import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import CardContent from '../CardContent/index.js';

const Card = ({id, cardTitle, category, priority}) => {
  return (
    <article key={id} className="card">
      <CardContent cardTitle={cardTitle} priority={priority} category={category}/>
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