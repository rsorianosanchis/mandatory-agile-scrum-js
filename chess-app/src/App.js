import React, { Component } from 'react';
import './App.css';
import MatchLista from './components/MatchLista';
import NewGame from './components/NewGame';

export default class App extends Component {
  state = { allGames: [] };

  createNewGame = data => {
    console.log(data);
    // esto es extra aqui en App para agregar al state de App
    const allGamesUpsdate = [...this.state.allGames, data];
    this.setState({ allGames: allGamesUpsdate });
  };
  render() {
    return (
      <div className='container'>
        <div className=''>
          <NewGame createNewGame={this.createNewGame} />
          {/* <MatchLista allGames={this.state.allGames} /> */}
        </div>
      </div>
    );
  }
}
