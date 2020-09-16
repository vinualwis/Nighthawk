import React from 'react';
import './index.css';

const CardCategory = ({category}) => {
  return <span className={`category-indicator ${category}`} title={category}></span>;
}

export default CardCategory;