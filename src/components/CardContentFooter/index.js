import React from 'react';
import PropTypes from 'prop-types';
import './index.css'
import CardPriority from '../CardPriority';
import CardCategory from '../CardCategory';
import Avatar from '../Avatar/index.js';
import userConfig from '../../constants/users';

const CardContentFooter = ({priority,category,assignee}) => {
  const [firstname, lastname] = userConfig[assignee].name.split(' ');
  const uColor = userConfig[assignee].color;
  return (
    <footer className='card-content-footer'>
      <div className="prioritised-data">
        <CardPriority priority={priority}/>
        <CardCategory category={category}/>
      </div>
      <Avatar firstname={firstname} lastname={lastname} uColor={uColor}/>
    </footer>
  );
}

CardContentFooter.propTypes = {
  priority: PropTypes.oneOf(['low','medium','high']),
  category: PropTypes.oneOf(['epic','story','feature','bug']),
  assignee: PropTypes.string.isRequired
}

export default CardContentFooter;