import React, { Component } from 'react';
const axios = require('axios');

const initialState = {
  game: {
    id: '',
    players: {
      Black: "",
      White: ""
    },
    chessmans: null,
    owner: "",
  }
};

class Game extends Component {

  handleClick = (e) => {
    e.preventDefault();
    console.log('click for play');
    this.getGameFromServer();

  };

  getGameFromServer = async () => {
    try {
      let updateGame = { ...this.props.data };
      const enteredName = prompt('Please enter your name');

      if (updateGame.players.Black === '') {
        updateGame.players.Black = enteredName;
      } else {
        updateGame.players.White = enteredName;
      }
      axios({
        method: 'put',
        url: `http://localhost:4000/api/seeks/${this.props.data.id}`,
        data: updateGame
      });

      updateGame = { ...initialState }

    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { data } = this.props;

    return (
      <div className='media mt-3'>
        <div className='media-body'>
          <p className='card-text'>
            <span>Match Owner:  {data.owner}</span>
          </p>

          <span>Spelares: {data.owner} -vs- {data.owner === data.players.Black & data.players.White !== '' ? data.players.White : 'Waiting Spelare'} </span>

          {data.players.Black === '' || data.players.White === '' ? (
            <div className='btn btn-sm btn-warning' onClick={this.handleClick}>
              Acceptera Spel
          </div>
          ) : (
              <p>Spel in progress</p>
            )}
        </div>
      </div>
    )
  }
}

export default Game;
