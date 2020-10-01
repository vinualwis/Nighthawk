import React from 'react';
import './index.css';
import LanesContainer from '../LanesContainer/index.js';
import AddCardModal from '../AddCardModal/index.js';

class AppMain extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
      counter: 10,
      board: {
        backlog: [
          {
            id: 'NHAWK-1',
            title: 'Simple and elegant code',
            assignee: 'Vinu Alwis',
            priority: 'high',
            category: 'feature'
          },
          {
            id: 'NHAWK-2',
            title: 'Simple and elegant code',
            assignee: 'Vinu Alwis',
            priority: 'high',
            category: 'feature'
          },
          {
            id: 'NHAWK-3',
            title: 'Simple and elegant code',
            assignee: 'Vinu Alwis',
            priority: 'high',
            category: 'feature'
          }
        ],
        todo: [
          {
            id: 'NHAWK-4',
            title: 'A11y',
            assignee: 'Bob Builder',
            priority: 'high',
            category: 'epic'
          }
        ],
        inprogress: [
          {
            id: 'NHAWK-5',
            title: 'A11y',
            assignee: 'Bob Builder',
            priority: 'high',
            category: 'epic'
          }
        ],
        testing: [
          {
            id: 'NHAWK-6',
            title: 'A11y',
            assignee: 'Bob Builder',
            priority: 'high',
            category: 'epic'
          }
        ],
        done: [
          {
            id: 'NHAWK-7',
            title: 'A11y',
            assignee: 'Bob Builder',
            priority: 'high',
            category: 'epic'
          }
        ],
        fun: [
          {
            id: 'NHAWK-8',
            title: 'A11y',
            assignee: 'Bob Builder',
            priority: 'high',
            category: 'epic'
          }
        ]
      }
    }
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
    const {lane} = newCard;
    newCard.id = `NHAWK-${this.state.counter}`;
    this.setState(state => {
      const board = {
        ...state.board,
        [lane]: [...state.board[lane],newCard]
      }
      const counter = state.counter + 1;
      console.log(board);
      return {
        board,
        counter
      }
    });
  }

  render() {
    const { board, hidden } = this.state;
    return (
      <main>
        <LanesContainer board={board} openModal={this.openModal}/>
        <AddCardModal hidden={hidden} closeModal={this.closeModal} addCardHandler={this.addCardHandler}/>
      </main>
    );
  }
}

export default AppMain;