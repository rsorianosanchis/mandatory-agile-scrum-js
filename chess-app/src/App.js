import React, { Component } from 'react';
//import './App.css';
import './bootstrap.min.css';
import MatchLista from './components/MatchLista';

export default class App extends Component {
  state = { allGames: [] };

  async componentDidMount() {
    this.getGames();
  }

  componentDidUpdate() {
    // if något händer vi tar alGames från localstorage
    const memmory = localStorage.getItem('games');
    this.setState({ allGames: JSON.parse(memmory) });
  }

  // GET data function från server, det körs i comopnentDidMunt
  getGames = async () => {
    const axios = require('axios');
    try {
      const response = await axios.get('/api/seeks');
      console.log(response);
      this.setState({ allGames: response.allGames });
      // här vi gör en copy i local storage
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
        </div>
      </div>
    );
  }
}
