import React from 'react';
import './index.css';
import LanesContainer from '../components/LanesContainer';
import AddCardModal from '../components/AddCardModal';
import { database } from '../services/firebase'

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
      counter: 101,
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
            newBoard[lane] = Object.values(board[lane].cards).sort((a,b) => a.position - b.position);
          }
          else {
            newBoard[lane] = [];
          }
          console.log(newBoard[lane]);
        });

      });
      this.setState({board: newBoard});

    });
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({
      hidden: false
    });
  }
  
  closeModal = () => {
    this.setState({
      hidden: true
    })
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
    })
    database.ref(`boards/001/lanes/${lane}/cards/${id}`).set({
      id,
      title,
      priority,
      category,
      assignee
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
    const { board, hidden } = this.state;
    return (
      <main>
        <LanesContainer board={board} openModal={this.openModal} onLaneChange={this.onLaneContentChange}/>
        <AddCardModal hidden={hidden} closeModal={this.closeModal} addCardHandler={this.addCardHandler}/>
      </main>
    );
  }
}

export default Board;