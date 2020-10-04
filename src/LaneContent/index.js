import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Card from '../Card/index.js';
import { ReactSortable } from 'react-sortablejs';

const LaneContent = ({laneId, cards, onLaneChange}) => {
  const [cardslist, setList] = useState(cards);
  useEffect(() => {
    // Updates the state based on props
    setList(cards);
  },[cards]);
  return (
    <ReactSortable
      className='lane-content'
      list={cardslist}
      setList={(newState)=> {
        onLaneChange(laneId,newState);
        setList(newState);
      }}
      animation={200}
      group="shared"
    >
      {
        cardslist.map(({id,title,category,priority}) => {
          return <Card key={id.toString()} cardTitle={title} category={category} priority={priority}/>
        })
      }
    </ReactSortable>
  );
}

LaneContent.propTypes = {
  laneId: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  onLaneChange: PropTypes.func.isRequired,
}



export default LaneContent;