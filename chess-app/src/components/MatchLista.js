import React, { Fragment } from 'react';
import Game from './Game';

const MatchLista = ({ allGames }) => {
  return (
    <Fragment>
      <h3 className='lista'>List of Games</h3>
      {allGames.map(game => {
        return <Game key={game.id} data={game} />;
      })}
    </Fragment>
  );
};

export default MatchLista;
