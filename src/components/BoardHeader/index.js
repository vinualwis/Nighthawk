import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import Heading1 from '../Common/Heading1';
import Avatar from '../Avatar';
import userConfig from '../../constants/users';
import LaneButton from '../LaneButton';
import SearchBar from '../SearchBar';
import ShareBoardButton from '../ShareBoardButton'

const BoardHeader = ({title, users, openModal, filterBoard}) => {
  return (
    <header className="board-header"> 
        <div className="board-title">
          <span className="board-tag">BOARD</span>
          <Heading1>{title}</Heading1>
        </div>
        <div className='team-view-container'>
            {Object.keys(userConfig).map((user) => {
              const [firstname, lastname] = userConfig[user]['name'].split(' ');
              const uColor = userConfig[user]['color'];
              return (
                <Avatar key={user} firstname={firstname} lastname={lastname} isActive style={{height:'35px', width: '35px', fontSize: '1rem',marginRight: '8px', fontWeight: 'normal', borderColor: uColor, color: uColor, boxShadow: 'rgba(12, 12, 13, 0.2) 0px 1px 8px 0px'}}/>
              )
            })}
            <ShareBoardButton onClickHandler={()=>console.log('😃')}/>
        </div>
        <SearchBar searchHandler={filterBoard}/>
        <div className="tool-bar"> 
          <LaneButton text="Add Card" openModal={openModal}/>
        </div>
    </header>
  )
}

BoardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  users: PropTypes.object,
  openModal: PropTypes.func.isRequired,
  filterBoard: PropTypes.func.isRequired
}

export default BoardHeader;

