import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CategoryIcon = ({category}) => {
  return (
    <span className={`category-icon ${category}`}></span>
  );
}

CategoryIcon.propTypes = {
  category: PropTypes.oneOf(['epic','story','feature','bug'])
}

export default CategoryIcon;