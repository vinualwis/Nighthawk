import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const AddBoardPlaceholder = ({...rest}) => {
  return (
    <article className="add-board-placeholder" {...rest}>
      <h2 >
        <FontAwesomeIcon icon={faPlus} className="add-board-placeholder-icon"/>
        Add Board
      </h2>
    </article>
  )
}

export default AddBoardPlaceholder;