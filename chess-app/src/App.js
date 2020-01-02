import React from 'react';
import './App.css';
import MatchLista from './components/MatchLista';
import NewGame from './components/NewGame';

export default class App extends Component {
  state = { allGAmes: [] };

  createNewGame = data => {
    console.log(data);
    // esto es extra aqui en App para agregar al state de App
    const allGamesUpsdate = [...this.state.allGames, data];
    this.setState({ allGAmes: allGamesUpsdate });
  };
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <NewGame createNewGame={this.createNewGame} />
          <MatchLista allGames={this.state.allGames} />
        </div>
      </div>
    );
  }
}
