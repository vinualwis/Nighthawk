import React from 'react';
import Logo from '../../assets/App-logo.svg';
import './index.css';

const AppLogo = () => {
  return (
    <div className="logo-container">
      <img src={Logo} alt="app-logo"/>
      <h2>nighthawk</h2>
    </div>
  )
}

export default AppLogo;