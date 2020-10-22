import React from 'react';
import './index.css';
import Heading1 from '../../components/Common/Heading1';
import BoardSummary from '../../components/BoardSummary';
import AddBoardPlaceholder from '../../components/AddBoardPlaceholder';
import {Link} from 'react-router-dom';
import { database } from '../../services/firebase';


class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      boards: []
    }
  }

  componentDidMount() {
    database.ref(`boards`).once('value').then((snapshot)=> {
      const boardsData = snapshot.val();
      let boards = Object.keys(boardsData).map((boardId) => {
        const {
          name: title,
          description,
        } = boardsData[boardId];
        return {
          id: boardId,
          title,
          description
        }
      });
      this.setState({
        boards
      });
    })
  }

  render() {
    const { boards } = this.state;
    return (
      <section className="home">
        <div className="home-content"> 
          <Heading1 className="home-title">My Boards</Heading1>
          <section className="boards-gallery">
            {
              boards.map(({id, title,description}) => {
                return (
                  <Link 
                    to={`/board/${id}`}
                    key={id}
                  >
                    <BoardSummary 
                      title={title}
                      description={description}
                      recentlyUpdated
                    />
                  </Link>
                )
              })
            }
            <AddBoardPlaceholder/>
          </section>
        </div>
      </section>
    )
  }
} 

export default Home;