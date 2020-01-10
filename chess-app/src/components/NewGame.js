import React, { Component } from 'react';
import uuid from 'uuid';

const initialState = {
  game: {
    id: '',
    allMoves: [],
    spelare1: '',
    spelare2: '',
    spelare1Color: '',
    spelare2Color: '',
    turnToMove: 'white'
  },
  error: false
};

class NewGame extends Component {
  state = { ...initialState };

  handleChange = e => {
    console.log(e.target);
    console.log(e.target.name + ':' + e.target.value);
    this.setState({
      game: { ...this.state.game, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    console.log('this is hndlesubmit');

    e.preventDefault();
    //här vi tar värde som behöver att skapa en ny spel
    const { spelare1, spelare1Color } = this.state.game;
    //validation att förmulär är fullt
    if (spelare1 === '' || spelare1Color === '') {
      this.setState({ error: true });
      console.log('fyll förmulär');

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
    // här vi skickar  data till server POST
    console.log(nyGame);
    // Send a POST request
    const axios = require('axios');
    axios({
      method: 'post',
      url: '/api/seeks',
      data: nyGame
    });

    // här vi gör reset i förmulär
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
          <label className='.label'>Spelare 1</label>
          <div className=''>
            <input
              type='text'
              className='form-control'
              placeholder='Namn Spelare 1'
              name='spelare1'
              value={this.state.game.spelare1}
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
              name='spelare1Color'
              value='white'
              onChange={this.handleChange}
            />
            White
            <br />
            <input
              type='radio'
              className='form-control'
              name='spelare1Color'
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
