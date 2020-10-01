import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Card from '../Card/index.js';
import { ReactSortable } from 'react-sortablejs';

const LaneContent = ({cards}) => {
  const [list, setList] = useState(cards);
  useEffect(() => {
    // Updates the state based on props
    setList(cards);
  },[cards])
  return (
    <ReactSortable
      className='lane-content'
      list={list}
      setList={setList}
      animation={200}
      group="shared"
    >
      {
        list.map(({id,title,category,priority}) => {
          return <Card key={id.toString()} cardTitle={title} category={category} priority={priority}/>
        })
      }
    </ReactSortable>
  );
}

LaneContent.propTypes = {
  cards: PropTypes.array.isRequired
}



export default LaneContent;