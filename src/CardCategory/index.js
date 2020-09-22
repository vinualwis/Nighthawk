import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CardCategory = ({category}) => {
  return (
    <div className="category-indicator">
      <span className={`category-color ${category}`}></span>
      {category.toUpperCase()}
    </div>
  )
}

CardCategory.propTypes = {
  category: PropTypes.oneOf(['epic','story','feature','bug'])
}

export default CardCategory;