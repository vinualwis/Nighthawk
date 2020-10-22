import React from 'react';
import './index.css';
import Heading1 from '../../components/Common/Heading1';
import BoardSummary from '../../components/BoardSummary';
import AddBoardPlaceholder from '../../components/AddBoardPlaceholder';
import {Link} from 'react-router-dom';
import { database } from '../../services/firebase';
import AuthUserContext from '../../components/Context/authentication';


class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      boards: []
    }
  }

  static contextType = AuthUserContext;

  componentDidMount() {
    const authUserId = this.context.uid;
    authUserId && database.ref(`users/${authUserId}/boards`).once('value').then((snapshot) => {
      Object.keys(snapshot.val()).forEach((boardId) => {
        database.ref(`boards/${boardId}`).once('value').then((boardSnap) => {
          const {
            name: title,
            description
          } = boardSnap.val();
          this.setState((prevState) => {
            return ({
              boards: [
                ...prevState.boards, {id: boardId,title,description}
              ]
            }
            )
          }) 
        })
      });
    });
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