import React, { Component } from 'react';

const initialState = {
  game: {
    id: '',
    all_moves: [],
    spelare1: '',
    spelare2: '',
    spelare1Color: '',
    spelare2Color: '',
    turn_to_move: 'white'
  }
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

  handleSubmit = e => {};

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
        {/*fin del impiut */}
      </form>
    );
  }
}

export default NewGame;
