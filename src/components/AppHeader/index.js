import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import AppLogo from '../AppLogo';
import Dropdown from '../Common/Dropdown';
import Avatar from '../Avatar';
import DropdownItem from '../Common/Dropdown/DropdownItem';

const AppHeader = ({logOut, authUser}) => {
  const [firstName, lastName] = authUser.displayName ? 
    authUser.displayName.split(' '):
  ['N','A'];
  return (
    <header className="app-header">
      <AppLogo/>
      <div className="header-actions-container">
        <Dropdown
          id="profile-dropdown"
          buttonContent={
            <Avatar firstname={firstName}lastname={lastName} style={{height: '35px', width: '35px'}}/>
          }
        >
            <DropdownItem clickHandler={logOut} isFocused>Profile</DropdownItem>
            <DropdownItem clickHandler={logOut}>Sign Out</DropdownItem>
        </Dropdown>
      </div>
    </header>
  );
}

AppHeader.propTypes = {
  logOut: PropTypes.func.isRequired,
  authUser: PropTypes.object.isRequired
}

export default AppHeader;

