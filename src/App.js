import React from 'react';
import './App.css';
import AppHeader from './AppHeader/index.js';
import AppMain from './AppMain/index.js';



const App = () => {
  return (
    <div className="App">
      <AppHeader/>
      <AppMain/>
    </div>
  );
}

export default App;
