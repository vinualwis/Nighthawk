import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import AppLogo from '../AppLogo';
import Dropdown from '../Common/Dropdown';
import Avatar from '../Avatar';
import DropdownItem from '../Common/Dropdown/DropdownItem';

const AppHeader = ({logOut}) => {
  return (
    <header className="app-header">
      <AppLogo/>
      <div className="header-actions-container">
        <Dropdown
          id="profile-dropdown"
          buttonContent={
            <Avatar firstname="Vinu" lastname="Alwis" style={{height: '35px', width: '35px'}}/>
          }
        >
            <DropdownItem clickHandler={logOut}>Profile</DropdownItem>
            <DropdownItem clickHandler={logOut}>Sign Out</DropdownItem>
        </Dropdown>
      </div>
    </header>
  );
}

AppHeader.propTypes = {
  logOut: PropTypes.func.isRequired
}

export default AppHeader;

