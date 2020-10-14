import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import { Switch,Route } from 'react-router-dom';
import Board from './pages/Board';
import { LANDING_PAGE, BOARD } from './constants/routes'; 


const App = () => {
  return (
    <div className="App">
      <AppHeader/>
      <Switch>
        <Route path={LANDING_PAGE} component={Board} exact/>
      </Switch>
    </div>
  );
}

export default App;
