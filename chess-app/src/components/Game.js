import React from 'react';

const Game = ({ data }) => {
  const handleClick = () => {
    //accept to play with spelare 1
  };
  return (
    <div className='media mt-3'>
      <div className='media-body'>
        <p className='card-text'>
          <span>Match Owner:  {data.owner}</span>
        </p>

        <span>Spelares: {data.owner} -vs- {data.spelare2 === '' ? data.spelare2 : 'Wainting en spelare'} </span>




        {data.spelare1 !== '' ? (
          <div className='btn btn-sm btn-warning' onClick={handleClick}>
            Acceptera Spel
          </div>
        ) : (
            <p>Spel i progress</p>
          )}
      </div>
    </div>
  );
};
export default Game;
