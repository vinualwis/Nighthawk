import React from 'react';
import './index.css';
import logo from '../../assets/App-logo.svg';
const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src={logo} alt="app-logo"/>
        <h2>nighthawk</h2>
      </div>
    </header>
  );
}

export default AppHeader;

