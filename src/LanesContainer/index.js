import React from 'react';
import './index.css';
import Lane from '../Lane/index.js'

const LanesContainer = () => {
  return (
    <div className="lanes-container">
      <Lane title='Backlog'/>
      <Lane title='Todo'/>
      <Lane title='Inprogress'/>
      <Lane title='Done'/>
      <Lane title='Fun'/>
    </div>
  )
}

export default LanesContainer;