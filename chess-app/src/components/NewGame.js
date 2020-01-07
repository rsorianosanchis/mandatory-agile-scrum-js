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
      cita: { ...this.state.game, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //här vi tar värde
    const {
      spelare1,
      spelare2,
      spelare1Color,
      spelare2Color
    } = this.state.game;
    //validation
    if (
      spelare1 === '' ||
      spelare2 === '' ||
      spelare1Color === '' ||
      spelare2Color === ''
    ) {
      this.setState({ error: true });
      //if error stopps
      return;
    }
    const nyGame = { ...this.state.game };
    nyGame.id = uuid();
    // här vi skickar  data till App.js igenom props function
    this.props.createNewGame(nyGame);
    this.setState({ ...initialState });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group row'>
          <label className=''>Spelare 1</label>
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
          <label className=''>Spelare 2</label>
          <div className=''>
            <input
              type='text'
              className='form-control'
              placeholder='Namn Spelare 2'
              name='spelare2'
              value={this.state.game.spelare2}
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
        {/*----------------*/}
      </form>
    );
  }
}

export default NewGame;
