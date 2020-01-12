import React from 'react';
import '../style.css'


const Game = ({ data }) => {
  const handleClick = () => {
    //accept to play with spelare 1
  };
  return (
    <div className='media mt-3'>
      <div className='media-body'>
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
