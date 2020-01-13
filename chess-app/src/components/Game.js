

import React, { Component } from 'react'

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

class Game extends Component {
  state = { ...initialState };

  handleClick = (e) => {
    console.log('testing apela matchen');
    console.log(e.target);
    console.log(this.props.data.id);




    // const enteredName = prompt('Please enter your name')


    // this.setState({ enteredName: enteredName })
  };

  render() {
    const { data } = this.props;
    return (
      <div className='media mt-3'>
        <div className='media-body'>
          <p className='card-text'>
            <span>Match Owner:  {data.owner}</span>
          </p>

          <span>Spelares: {data.owner} -vs- {data.spelare2 === '' ? data.spelare2 : 'Wainting en spelare'} </span>




          {data.spelare1 !== '' ? (
            <div className='btn btn-sm btn-warning' onClick={this.handleClick}>
              Acceptera Spel
          </div>
          ) : (
              <p>Spel i progress</p>
            )}
        </div>
      </div>
    )
  }
}

export default Game;
