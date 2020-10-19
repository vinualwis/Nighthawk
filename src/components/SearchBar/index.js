import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({searchHandler}) => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <label htmlFor='search'>
          <FontAwesomeIcon icon={faSearch} className="search-icon"/>
        </label>
        <input id='search' type='text' placeholder="Search by card title, etc" onChange={searchHandler}/>
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  searchHandler: PropTypes.func.isRequired
}

export default SearchBar;