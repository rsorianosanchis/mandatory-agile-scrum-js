import React, { Component, Fragment } from 'react';
import Game from './Game';
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

      localStorage.setItem('games', JSON.stringify(this.state.allGames));
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (

      <Fragment>
        {this.state.allGames.map(game => {
          return <Game key={game.id} data={game} />;
        })}

      </Fragment>


    )
  }
}


export default MatchLista;
