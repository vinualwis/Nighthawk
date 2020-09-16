import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import LaneButton from '../LaneButton/index.js';

const LaneHeader = ({title}) => {
  return (
    <header className="lane-header">
      <h3 className="lane-title">{title}</h3>
      <LaneButton text="Add Card"/>
    </header>
  )
}

LaneHeader.propTypes = {
  title: PropTypes.string
}

export default LaneHeader;