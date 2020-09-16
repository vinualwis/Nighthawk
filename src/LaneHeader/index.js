import React from 'react';
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

export default LaneHeader;