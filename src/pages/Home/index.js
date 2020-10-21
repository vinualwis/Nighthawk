import React from 'react';
import './index.css';
import Heading1 from '../../components/Common/Heading1';
import BoardSummary from '../../components/BoardSummary';
import AddBoardPlaceholder from '../../components/AddBoardPlaceholder';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
        <div className="home-content"> 
          <Heading1 className="home-title">My Boards</Heading1>
          <section className="boards-gallery">
            <Link to="/board">
              <BoardSummary 
                title="Project Nighthawk" 
                description="Simple, elegant and customer-centric kanban tool"
                recentlyUpdated
              />
            </Link>
            <BoardSummary 
              title="Apollo" 
              description="Understanding customer habits for different markets"
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