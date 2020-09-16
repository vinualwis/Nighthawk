import React from 'react';
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

export default CardContentFooter;