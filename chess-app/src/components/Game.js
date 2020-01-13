import React, { Component } from 'react'



class Game extends Component {
  //state = { ...initialState };

  handleClick = (e) => {
    console.log('testing apela matchen');
    console.log(e.target);
    console.log(this.props.data.id);
    console.log(this.props.data);





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
