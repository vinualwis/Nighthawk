import React from 'react';
import Logo from '../../assets/App-logo.svg';
import './index.css';

const AppLogo = () => {
  return (
    <div className="logo-container">
      <img src={Logo} alt="app-logo"/>
      <span className="app-name">nighthawk</span>
    </div>
  )
}

export default AppLogo;