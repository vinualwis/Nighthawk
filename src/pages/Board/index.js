/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';
import LanesContainer from '../../components/LanesContainer';
import AddCardModal from '../../components/AddCardModal';
import CardSummaryModal from '../../components/CardSummaryModal';
import { database, auth } from '../../services/firebase';
import withAuthorisation from '../../components/Authorisation';
import BoardHeader from '../../components/BoardHeader';
import AuthUserContext from '../../components/Context/authentication'

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      addCardHidden: true,
      editCardHidden: true,
      counter: 0,
      openCard: '',
      board: {},
      title: 'Project Nighthawk',
      filterText: '',
      boardId: null
    }
  }

  static contextType = AuthUserContext;

  componentDidMount(){
    const boardId = this.props.match.params.id;
    database.ref(`boards/${boardId}/`).on("value", snapshot => {
      let newBoard = {};
      const { card_id_init, lanes: board, name: title } = snapshot.val();
      Object.keys(board).sort((a,b) => board[a].order - board[b].order).forEach((lane) => {
        if (board[lane].cards && board[lane].cards !== "NULL") {
          newBoard[lane] = Object.values(board[lane].cards)
          .sort((a,b) => a.position - b.position).map((card) => {
            return {
              ...card,
              lane
            }
          });
        }
        else {
          newBoard[lane] = [];
        }
      });
      this.setState({board: newBoard, counter: card_id_init, boardId, title});
    });
  }

  componentWillUnmount(){ 
    database.ref(`boards/${this.state.boardId}/`).off();
  }

  openAddCardModal = (e) => {
    e.preventDefault();
    this.setState({
      addCardHidden: false
    });
  }
  
  closeAddCardModal = () => {
    this.setState({
      addCardHidden: true
    })
  }

  openEditCardModal = (cardId) => {
    this.setState({
      editCardHidden: false,
      openCard: cardId
    });
  }

  closeEditCardModal = () => {
    this.setState({
      editCardHidden: true
    });
  }

  calculatePosition = (lane) => {
    const position = 
      this.state.board[lane].sort((a,b) => b.position - a.position)[0] ? 
      this.state.board[lane].sort((a,b) => b.position - a.position)[0].position + 1 : 0;
    return position;
  }

  filterBoard = (event) => {
    this.setState({
      filterText: event.target.value
    });
  }

  addCardHandler = (newCard) => {
    const {
      lane,
      title, 
      priority, 
      category,
      assignee
    } = newCard;
    const id = `NHAWK-${this.state.counter}`;
    const position = this.calculatePosition(lane);
    database.ref(`boards/${this.state.boardId}/lanes/${lane}/cards/${id}`).set({
      id,
      title,
      priority,
      category,
      assignee,
      position
    });
    database.ref(`boards/${this.state.boardId}/card_id_init`).set(this.state.counter + 1);
  }

  logOutHandler = () => {
    auth.signOut().then(() => {
      alert('Successful Signout');
      // eslint-disable-next-line react/prop-types
      this.props.history.push('/signin');
    });
  }

  editCardHandler = (updatedCard) => {
    const {
      id,
      title,
      priority,
      category, 
      assignee,
      lane,
      previousLane,
      position
    } = updatedCard;
    let newPosition;
    if(lane === previousLane){
      newPosition = position;
    }
    else {
      newPosition = this.calculatePosition(lane);
      database.ref(`boards/${this.state.boardId}/lanes/${previousLane}/cards/${id}`).remove(() => {
        this.onLaneContentChange(previousLane,this.state.board[previousLane]);
      });
    }
    database.ref(`boards/${this.state.boardId}/lanes/${lane}/cards/${id}`).set({
      id,
      title,
      priority,
      category,
      assignee,
      position: newPosition
    });
  }

  deleteCard = (card) => {
    const { id, lane } = card;
    database.ref(`boards/${this.state.boardId}/lanes/${lane}/cards/${id}`).remove(() => {
      this.onLaneContentChange(lane,this.state.board[lane]);
    });
  }

  onLaneContentChange = (lane,cards) => {
    // If the cards have been filtered then change the card order
    let position = 0;
    const reducer = (accumulator, currentValue) => {
      position += 1;
      const { 
        id,
        title,
        priority,
        category,
        assignee
      } = currentValue;
      return {
        ...accumulator,
        [id]: {
          id,
          title,
          priority,
          category,
          assignee,
          position
        }
      }
    }
    const cardsJSON = cards.reduce(reducer,{});
    database.ref(`boards/${this.state.boardId}/lanes/${lane}/cards`).set(cardsJSON);
  }

  filterTheBoard = () => {
    let filteredBoard = {};
    const { board, filterText } = this.state;
    Object.keys(board).forEach((lane) => {
        filteredBoard[lane] = board[lane].map((card) => {
          const {title, priority, category} = card;
          const meetsCriteria = title.includes(filterText) || priority.includes(filterText) || category.includes(filterText);
          if (meetsCriteria) {
            card.display = true;
          }
          else {
            card.display = false;
          }
          return card;
        }
        );
    });
    return filteredBoard;
  }

  render() {
    const {
      board,
      title, 
      addCardHidden,
      editCardHidden,
      openCard
    } = this.state; 
    const filteredBoard = Object.keys(board).length > 0 ? this.filterTheBoard() : {};
    const reducer = (accumulator, currentValue) => {
      return [...accumulator, ...board[currentValue]];
    }
    const cardContent = Object.keys(board).reduce(reducer,[]).find(card => card.id === openCard);
    return (
      <section className="board">
        <BoardHeader title={title} openModal={this.openAddCardModal} filterBoard={this.filterBoard}/>
        <LanesContainer board={filteredBoard} openModal={this.openAddCardModal} onLaneChange={this.onLaneContentChange} onCardClickHandler={this.openEditCardModal}/>
        {
          !addCardHidden ? <AddCardModal closeModal={this.closeAddCardModal} addCardHandler={this.addCardHandler}/> : null
        }
        {
          !editCardHidden ? <CardSummaryModal cardContent={cardContent} closeModal={this.closeEditCardModal} editCardHandler={this.editCardHandler} deleteCardHandler={this.deleteCard}/> : null
        }
      </section>
    );
  }
}


const condition = authUser => {
  return authUser !== null;
};

export default withAuthorisation(Board,condition);