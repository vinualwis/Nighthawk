import React from 'react';
import PropTypes from 'prop-types';
import './index.css'
import CardPriority from '../CardPriority/index.js';
import CardCategory from '../CardCategory/index.js';
import Avatar from '../Avatar/index.js';

const CardContentFooter = ({priority,category}) => {
  return (
    <footer className='card-content-footer'>
      <div className="prioritised-data">
        <CardPriority priority={priority}/>
        <CardCategory category={category}/>
      </div>
      <Avatar firstname="Vinu" lastname="Alwis"/>
    </footer>
  );
}

CardContentFooter.propTypes = {
  priority: PropTypes.oneOf(['low','medium','high']),
  category: PropTypes.oneOf(['epic','story','feature','bug'])
}

export default CardContentFooter;