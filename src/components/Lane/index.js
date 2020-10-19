import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import LaneHeader from '../LaneHeader/index.js';
import LaneContent from '../LaneContent/index.js';

const Lane = ({title,cards,onLaneChange, onCardClickHandler, ...rest}) => {
  return (
    <article className='lane'>
      <LaneHeader title={title} {...rest}/>
      <LaneContent laneId={title} cards={cards} onLaneChange={onLaneChange} onCardClickHandler={onCardClickHandler}/>
    </article>
  );
}

Lane.propTypes = {
  title: PropTypes.string,
  openModal: PropTypes.func,
  cards: PropTypes.array,
  onLaneChange: PropTypes.func.isRequired,
  onCardClickHandler: PropTypes.func.isRequired
}

export default Lane;