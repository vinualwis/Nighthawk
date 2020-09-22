import React, {useState} from 'react';
import './index.css';
import Card from '../Card/index.js';
import { ReactSortable } from 'react-sortablejs';

const LaneContent = () => {
  const [list, setList] = useState(
    [
      {
        id: 199,
        title: 'Simple and elegant code',
        category: 'epic',
        priority: 'high'
      },
      {
        id: 299,
        title: 'Nighthawk Research',
        category: 'feature',
        priority: 'high'
      },
      {
        id: 399,
        title: 'A11y',
        category: 'feature',
        priority: 'high'
      },
    ]
  )
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

export default LaneContent;