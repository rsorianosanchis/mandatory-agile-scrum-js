import React, { Component } from 'react';
import uuid from 'uuid';
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
  },
  error: false,
  color: ''
};

class NewGame extends Component {
  state = { ...initialState };

  handleChange = e => {
    console.log(e.target.value);
    console.log(e.target.name);
    if (e.target.name === 'owner') {
      this.setState({
        game: { ...this.state.game, owner: e.target.value }
      });
    } else if (e.target.name === 'radiocolor') {
      this.setState({
        game: { ...this.state.game }
      });

      this.setState(
        { color: e.target.value }
      );
    };
  };

  handleSubmit = e => {
    e.preventDefault();

    let nyGame = { ...this.state.game };
    nyGame.id = uuid('uuid/v4');
    if (this.state.color === 'black') {
      nyGame.players.Black = nyGame.owner;
      nyGame.players.White = '';

    } else {
      nyGame.players.White = nyGame.owner;
      nyGame.players.Black = '';

    }
    console.log(nyGame);



    axios({
      method: 'post',
      url: 'http://localhost:4000/api/seeks',
      data: nyGame
    });

    this.setState({ ...initialState });
    nyGame = { ...initialState };


  };

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h5>CREATE NEW GAME</h5>
        {error ? (
          <div className='alert alert-danger mt-1 mb-1'>Form incomplete !</div>
        ) : null}
        <div>
          <label className='label'></label>
          <div className=''>
            <input
              type='text'
              className='input-name'
              placeholder='PLAYER NAME'
              name='owner'
              value={this.state.game.owner}
              onChange={this.handleChange}
            />
          </div>
        </div>
        {/*----------------*/}
        <div className='form-check form-check-inline'>
          <label className=''></label>
          <div className=''>
            <input
              type='radio'
              className='form-check-input'
              name='radiocolor'
              value='white'
              onChange={this.handleChange}
            />
            <label class="form-check-label" for="inlineRadio1">WHITE</label>
            <br />
            <input
              type='radio'
              className='form-check-input'
              name='radiocolor'
              value='black'
              onChange={this.handleChange}
            />
            <label class="form-check-label" for="inlineRadio1">BLACK</label>

            <br />
          </div>
        </div>
        <input type='submit' className='btn btn-success' value='Add' />
      </form>
    );
  }
}

export default NewGame;
