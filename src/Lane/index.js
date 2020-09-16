import React from 'react';
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

export default Lane;