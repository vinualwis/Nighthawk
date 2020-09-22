import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import CardContentFooter from '../CardContentFooter/index.js';

const CardContent = ({cardTitle, ...rest}) => {
  return (
    <div className="card-content">
      <p className="card-title">{cardTitle}</p>
      <CardContentFooter {...rest}/>
    </div>
  )
}

CardContent.propTypes = {
  cardTitle: PropTypes.string,
  priority: PropTypes.oneOf(['low','medium','high'])
}

export default CardContent;