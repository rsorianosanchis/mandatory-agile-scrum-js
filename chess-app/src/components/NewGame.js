import React, { Component } from 'react';
import uuid from 'uuid';

const initialState = {
  game: {
    id: '',
    // allMoves: [],
    spelare1: '',
    spelare2: null,
    spelare1Color: '',
    spelare2Color: null,
    turnToMove: 'white',
    owner: ''
  },
  error: false
};

class NewGame extends Component {
  state = { ...initialState };

  handleChange = e => {
    this.setState({
      game: { ...this.state.game, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //här vi tar värde som behöver att skapa en ny spel
    const { spelare1, spelare1Color } = this.state.game;
    //validation att förmulär är fullt
    if (spelare1 === '' || spelare1Color === '') {
      this.setState({ error: true });
      //if error stops
      return;
    }
    const nyGame = { ...this.state.game };
    // man skapar här ett id med uuid library (pending att ta bort om det gör i backend)
    nyGame.id = uuid('uuid/v4');
    if (nyGame.spelare1Color === 'white') {
      nyGame.spelare2Color = 'black';
    } else {
      nyGame.spelare2Color = 'white';
    }
    nyGame.owner = nyGame.spelare1;
    const axios = require('axios');
    axios({
      method: 'post',
      url: 'http://localhost:4000/api/seeks',
      data: nyGame
    });

    // här vi gör reset i förmulär
    this.setState({ ...initialState });
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
              name='spelare1'
              value={this.state.game.spelare1}
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
              name='spelare1Color'
              value='white'
              onChange={this.handleChange}
            />
            <label class="form-check-label" for="inlineRadio1">WHITE</label>
            <br />
            <input
              type='radio'
              className='form-check-input'
              name='spelare1Color'
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
