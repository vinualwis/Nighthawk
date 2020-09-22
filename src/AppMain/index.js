import React from 'react';
import './index.css';
import LanesContainer from '../LanesContainer/index.js';
import ModalOverlay from '../ModalOverlay';
import Modal from '../Modal/index.js';

class AppMain extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
      lanes: [
        'backlog',
        'todo',
        'inprogress',
        'done',
        'fun'
      ]
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

  render() {
    const { lanes, hidden } = this.state;
    return (
      <main>
        <LanesContainer lanes={lanes} openModal={this.openModal}/>
        <ModalOverlay hidden={hidden} closeModal={this.closeModal}/>
        <Modal hidden={hidden}/>
      </main>
    );
  }
}

export default AppMain;