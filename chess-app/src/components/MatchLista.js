import React, { Fragment } from 'react';
import Game from './Game';

const MatchLista = ({ allGames }) => {
  return (
    <Fragment>
      {allGames.map(game => {
        return <Game key={game.id} data={game} />;
      })}
    </Fragment>
  );
};

export default MatchLista;
