import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Lane from '../Lane/index.js'

const LanesContainer = ( { board, ...rest} ) => {
  return (
    <div className="lanes-container">
        {
          Object.keys(board).map((lane) => {
            return <Lane key={lane} title={lane} {...rest} cards={board[lane]} />
          })
        }
    </div>
  )
}

LanesContainer.propTypes = {
  board: PropTypes.object.isRequired,
}

export default LanesContainer;