import React from 'react';
import PropTypes from 'prop-types';
import './index.css'
import CardPriority from '../CardPriority/index.js';
import Avatar from '../Avatar/index.js';

const CardContentFooter = ({priority}) => {
  return (
    <footer className='card-content-footer'>
      <CardPriority priority={priority}/>
      <Avatar firstname="Vinu" lastname="Alwis"/>
    </footer>
  );
}

CardContentFooter.propTypes = {
  priority: PropTypes.oneOf(['low','medium','high'])
}

export default CardContentFooter;