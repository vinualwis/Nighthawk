import React from 'react';
import PropTypes from 'prop-types';
import BoardAvatar from '../BoardAvatar';
import './index.css';

const BoardSummary = ({title, description, recentlyUpdated}) => {
  return (
    <article className="board-summary">
      <div className="board-summary-content">
        <div className="board-summary-title-container"> 
          <BoardAvatar title={title}/>
          <h2 className="board-summary-title">{title}</h2>
        </div>
        <p className="board-description">{description}</p>
      </div>
      {
        recentlyUpdated &&   <span className="board-updated">
                                 Recently updated
                             </span>
      }
    </article>
  )
}

BoardSummary.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  recentlyUpdated: PropTypes.bool
}


export default BoardSummary;