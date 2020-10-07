import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import { Switch,Route } from 'react-router-dom';
import Board from './pages/Board';


const App = () => {
  return (
    <div className="App">
      <AppHeader/>
      <Switch>
        <Route path="/" component={Board} exact/>
      </Switch>
    </div>
  );
}

export default App;
