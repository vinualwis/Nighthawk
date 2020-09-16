import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CardCategory = ({category}) => {
  return <span className={`category-indicator ${category}`} title={category}></span>;
}

CardCategory.propTypes = {
  category: PropTypes.oneOf(['epic','story','feature','bug'])
}

export default CardCategory;