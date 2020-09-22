import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Lane from '../Lane/index.js'

const LanesContainer = ( {lanes, ...rest} ) => {
  return (
    <div className="lanes-container">
        {
          lanes.map((lane) => {
            return <Lane key={lane} title={lane} {...rest} />
          })
        }
    </div>
  )
}

LanesContainer.propTypes = {
  lanes: PropTypes.arrayOf(PropTypes.string),
}

export default LanesContainer;