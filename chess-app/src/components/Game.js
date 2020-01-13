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
  state = { ...initialState };

  handleClick = (e) => {
    e.preventDefault();
    console.log('click for play');
    this.getGameFromServer();

  };

  getGameFromServer = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/game/${this.props.data.id}`);
      console.log(response.data);


      this.setState({ game: response.data });
      let updateGame = { ...this.state.game }

      //this.setState({ game.players.: response.data });

      // Här ska jag göra prompt 
      const enteredName = prompt('Please enter your name');
      //this.setState({ enteredName: enteredName })
      if (this.state.game.players.Black === '') {
        updateGame.players.Black = enteredName;
      } else {
        updateGame.players.White = enteredName;
      }
      // Här ska jag göra PUT
      axios({
        method: 'put',
        url: 'http://localhost:4000/api/seeks',
        data: updateGame
      });


      //reset
      this.setState({ ...initialState });
      updateGame = { ...initialState }

      console.log(this.state.game);
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
