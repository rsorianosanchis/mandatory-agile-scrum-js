import React, { Component } from 'react';
import Game from './Game';
import NewGame from './NewGame';
import '../style.css'
const axios = require('axios');


class MatchLista extends Component {
  state = { allGames: [] };

  async componentDidMount() {
    this.getGames();
  }

  getGames = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/seeks');

      this.setState({ allGames: response.data });

    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            {this.state.allGames.map(game => {
              console.log(game);
              return <Game key={game.id} data={game} />;
            })}
          </div>
          <div className='col-sm'>
            <NewGame />
          </div>
        </div>
      </div>
    )
  }
}


export default MatchLista;
