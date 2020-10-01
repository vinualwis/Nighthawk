import React from 'react';
import PropTypes from 'prop-types';
import CategoryIcon from './CardCategoryIcon';
import './index.css';

const CardCategory = ({category}) => {
  return (
    <div className="category-indicator">
      <CategoryIcon category={category}/>
      {category.toUpperCase()}
    </div>
  )
}

CardCategory.propTypes = {
  category: PropTypes.oneOf(['epic','story','feature','bug'])
}

export default CardCategory;