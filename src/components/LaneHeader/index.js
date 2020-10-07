import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import LaneButton from '../LaneButton';

const LaneHeader = ({title, openModal}) => {
  return (
    <header className="lane-header">
      <h3 className="lane-title">{title}</h3>
      <LaneButton text="Add Card" openModal={openModal}/>
    </header>
  )
}

LaneHeader.propTypes = {
  title: PropTypes.string,
  openModal: PropTypes.func
}

export default LaneHeader;