import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import AppLogo from '../AppLogo';
import BaseButton from '../Common/Button';

const AppHeader = ({logOut}) => {
  return (
    <header className="app-header">
      <AppLogo/>
      <div className="header-actions-container">
        <BaseButton onClickHandler={logOut}>
          Logout
        </BaseButton>
      </div>
    </header>
  );
}

AppHeader.propTypes = {
  logOut: PropTypes.func.isRequired
}

export default AppHeader;

