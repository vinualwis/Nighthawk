import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sortable from 'sortablejs';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

document.querySelectorAll('lane').forEach((lane) => {
  const laneContent = lane.querySelector('lane-content');
  new Sortable(laneContent, {
    group: 'shared',
    animation:300
  });
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
