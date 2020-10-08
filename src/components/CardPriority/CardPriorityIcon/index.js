import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const PriorityIcon = ({priority}) => {
  return (
    <FontAwesomeIcon icon={faArrowCircleUp} className={priority} />
  )
}

PriorityIcon.propTypes = {
  priority: PropTypes.oneOf(['low','medium','high'])
}

export default PriorityIcon;