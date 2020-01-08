import React from 'react';

const Game = ({ data }) => {
  const handleClick = () => {
    //go to spel and fill spelare 2
  };
  return (
    <div className='media mt-3'>
      <div className='media-body'>
        <p className='card-text'>
          <span>Fecha:</span>
          {data.fecha}
        </p>
        <p className='card-text'>
          <span>Spelares</span>
          {data.spelare1}
          {data.spelare1Color}-vs-{data.spelare2}
          {data.spelare2Color}
        </p>
        <p className='card-text'>
          <span>Lobby:</span>
          {/* {data.} */}
        </p>
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