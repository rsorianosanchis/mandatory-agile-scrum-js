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

      <table>
      <tr>
        <th scope="row">Match Owner</th>
        <th>Color</th>
        <th>Player 1</th>
        <th>Player 2</th>
        <th>status</th>
      </tr>
        <tbody>
          <tr>
            <td><span>{data.owner}</span></td>
            <td>{data.owner === data.players.Black ? 'Black' : 'White'}</td>
            <td><tr><span>{data.owner}</span></tr></td>
            <td className="Awaiting-Player">  <span>
            {data.players.Black === '' || data.players.White === '' ? 'Waiting Player' : data.owner === data.players.White? 'White':'Black'}
            </span></td>

            <td>
            {data.players.Black === '' || data.players.White === '' ? (
              <div className='btn btn-sm btn-warning' onClick={this.handleClick}>
                Acceptera Spel
            </div>
            ) : (
                <p>Spel in progress</p>
              )}
            </td>
          </tr>
        </tbody>
      </table>

</div>
    )
  }
}

export default Game;
