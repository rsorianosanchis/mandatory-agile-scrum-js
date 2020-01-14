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
      console.log(updateGame);

      // axios({
      //   method: 'put',
      //   url: `http://localhost:4000/api/seeks/${this.props.data.id}`,
      //   data: updateGame
      // });
      async function makePostRequest() {


        let res = await axios.put(`http://localhost:4000/api/seeks/${updateGame.id}`, updateGame);

        console.log(res.data);
      }

      makePostRequest();

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

          <span>Spelares: {data.owner} -vs-  {data.owner === data.players.Black && data.players.White === '' ? 'Waiting Spelare' : data.players.White}
            {data.owner === data.players.White && data.players.Black === '' ? 'Waiting Spelare' : data.players.Black} </span>


          {data.owner === data.players.Black && data.players.White === '' ? 'Waiting Spelare' : data.players.White}

          {data.owner === data.players.White && data.players.Black === '' ? 'Waiting Spelare' : data.players.Black}

          {data.players.Black === '' || data.players.White === '' ? 'Waiting Spelare' : data.owner === data.players.White ? 'white' : 'black'}

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
