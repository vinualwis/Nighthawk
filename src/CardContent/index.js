import React from 'react';
import './index.css';
import CardContentFooter from '../CardContentFooter/index.js';

const CardContent = ({cardTitle,priority}) => {
  return (
    <div className="card-content">
      <p className="card-title">{cardTitle}</p>
      <CardContentFooter priority={priority}/>
    </div>
  )
}

export default CardContent;