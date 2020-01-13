import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import MatchLista from './components/MatchLista';
import NewGame from './components/NewGame';
import GameBoard from './components/gameBoard';

const axios = require('axios');

export default class App extends Component {
  state = { allGames: [] };

  async componentDidMount() {
    this.getGames();
  }

  componentDidUpdate() {
    const memmory = localStorage.getItem('games');
    this.setState({ allGames: JSON.parse(memmory) });
  }

  getGames = async () => {
    try {
      const response = await axios.get('/api/seeks');
      this.setState({ allGames: response.allGames });
      localStorage.setItem('games', JSON.stringify(this.state.allGames));
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className='container'>
        <div className=''>
          <h4 className='title'>Chess project</h4>
          <MatchLista allGames={this.state.allGames} />
          <NewGame />
          <GameBoard />
        </div>
      </div>
    );
  }
}
