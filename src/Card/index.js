import React from 'react';
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

export default Card;