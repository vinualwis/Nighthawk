import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import LaneHeader from '../LaneHeader/index.js';
import LaneContent from '../LaneContent/index.js';

const Lane = ({title}) => {
  return (
    <article className='lane'>
      <LaneHeader title={title}/>
      <LaneContent/>
    </article>
  );
}

Lane.propTypes = {
  title: PropTypes.string
}

export default Lane;