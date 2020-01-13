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

    // här vi gör reset i förmulär
    console.log('RESET');

    this.setState({ ...initialState });


  };

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h5>Create new game</h5>
        {error ? (
          <div className='alert alert-danger mt-1 mb-1'>Form incomplet !</div>
        ) : null}
        <div className='form-group row'>
          <label className='.label'>Spelare 1/ Ownwer</label>
          <div className=''>
            <input
              type='text'
              className='form-control'
              placeholder='Namn Spelare 1'
              name='owner'
              value={this.state.game.owner}
              onChange={this.handleChange}
            />
          </div>
        </div>
        {/*----------------*/}
        <div className='form-group row'>
          <label className=''>Spelare 1 Color</label>
          <div className=''>
            <input
              type='radio'
              className='form-control'
              name='radiocolor'
              value='white'
              onChange={this.handleChange}
            />
            White
            <br />
            <input
              type='radio'
              className='form-control'
              name='radiocolor'
              value='black'
              onChange={this.handleChange}
            />
            Black
            <br />
          </div>
        </div>
        <input type='submit' className='btn btn-success' value='Add' />
      </form>
    );
  }
}

export default NewGame;
