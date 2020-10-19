import React from 'react';
import './index.css';
import AppHeader from '../../components/AppHeader';
import Heading1 from '../../components/Common/Heading1';
import BoardSummary from '../../components/BoardSummary';
import AddBoardPlaceholder from '../../components/AddBoardPlaceholder';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
        <AppHeader logOut={() => {console.log('logout')}}/>
        <div className="home-content"> 
          <Heading1>My Boards</Heading1>
          <section className="boards-gallery">
            <Link to="/board">
              <BoardSummary 
                title="Project Nighthawk" 
                description="Simple, elegant and customer-centric kanban tool"
                recentlyUpdated
              />
            </Link>
            <BoardSummary 
              title="IoT Connection Manager" 
              description="Simplify connectivity management for Telstra M2M customers"
            />
            <BoardSummary 
              title="Altex" 
              description="Simple, elegant and customer-centric kanban tool"
              recentlyUpdated
            />
            <AddBoardPlaceholder/>
          </section>
        </div>
    </section>
  )
}

export default Home;