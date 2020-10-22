import React, {Suspense, lazy} from 'react';
import './index.css';
import Heading1 from '../../components/Common/Heading1';
import BoardSummary from '../../components/BoardSummary';
import AddBoardPlaceholder from '../../components/AddBoardPlaceholder';
import {Link} from 'react-router-dom';
import { database } from '../../services/firebase';
import AuthUserContext from '../../components/Context/authentication';
import {BoardLanes} from '../../constants/template';
import {v4 as uuidv4} from 'uuid';

const AddBoardModal = lazy(() => import('../../components/AddBoardModal'));

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      boards: [],
      addBoardModalHidden: true
    }
  }

  static contextType = AuthUserContext;

  addBoardModalOpen = () => {
    this.setState({
      addBoardModalHidden: false
    });
  }

  addBoardModalClose = () => {
    this.setState({
      addBoardModalHidden: true
    });
  }

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

  createBoard = (name, description) => {
    const boardId = uuidv4();
    database.ref(`boards/${boardId}`).set({
      card_id_init: 0,
      description,
      name,
      lanes: BoardLanes
    });
    const authUserId = this.context.uid;
    database.ref(`users/${authUserId}/boards/${boardId}`).set({
      role: 'admin'
    });
  }

  render() {
    const { boards, addBoardModalHidden } = this.state;
    return (
      <section className="home">
        <Suspense>
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
              <AddBoardPlaceholder onClick={this.addBoardModalOpen}/>
            </section>
            {
              !addBoardModalHidden && <AddBoardModal hidden={addBoardModalHidden} closeModal={this.addBoardModalClose} addBoardHandler={this.createBoard} />
            }
          </div>
        </Suspense>
      </section>
    )
  }
} 

export default Home;