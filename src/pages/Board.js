import React from 'react';
import './index.css';
import LanesContainer from '../components/LanesContainer';
import AddCardModal from '../components/AddCardModal';
import CardSummaryModal from '../components/CardSummaryModal';
import { database } from '../services/firebase';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      addCardHidden: true,
      editCardHidden: true,
      counter: 101,
      openCard: '',
      board: {}
    }
  }

  componentDidMount(){
    database.ref('boards/001').on("value", snapshot => {
      let newBoard = {}, board = {};
      snapshot.forEach(snap => {
        board = snap.val();
        Object.keys(board).sort((a,b) => board[a].order - board[b].order).forEach((lane) => {
          if (board[lane].cards) {
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

      });
      this.setState({board: newBoard});

    });
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

  addCardHandler = (newCard) => {
    const {
      lane,
      title, 
      priority, 
      category,
      assignee
    } = newCard;
    const id = `NHAWK-${this.state.counter}`;
    this.setState(state => {
      return {
        counter: state.counter + 1
      }
    });
    const position = this.calculatePosition(lane);
    database.ref(`boards/001/lanes/${lane}/cards/${id}`).set({
      id,
      title,
      priority,
      category,
      assignee,
      position
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
      database.ref(`boards/001/lanes/${previousLane}/cards/${id}`).remove(() => {
        this.onLaneContentChange(previousLane,this.state.board[previousLane]);
      });
    }
    database.ref(`boards/001/lanes/${lane}/cards/${id}`).set({
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
    database.ref(`boards/001/lanes/${lane}/cards/${id}`).remove(() => {
      this.onLaneContentChange(lane,this.state.board[lane]);
    });
  }

  onLaneContentChange = (lane,cards) => {
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
    database.ref(`boards/001/lanes/${lane}/cards`).set(cardsJSON);
  }

  render() {
    const { 
      board, 
      addCardHidden,
      editCardHidden,
      openCard
    } = this.state; 
    const reducer = (accumulator, currentValue) => {
      return [...accumulator, ...board[currentValue]];
    }
    const cardContent = Object.keys(board).reduce(reducer,[]).find(card => card.id === openCard);
    return (
      <main>
        <LanesContainer board={board} openModal={this.openAddCardModal} onLaneChange={this.onLaneContentChange} onCardClickHandler={this.openEditCardModal}/>
        {
          !addCardHidden ? <AddCardModal closeModal={this.closeAddCardModal} addCardHandler={this.addCardHandler}/> : null
        }
        {
          !editCardHidden ? <CardSummaryModal cardContent={cardContent} closeModal={this.closeEditCardModal} editCardHandler={this.editCardHandler} deleteCardHandler={this.deleteCard}/> : null
        }
      </main>
    );
  }
}

export default Board;