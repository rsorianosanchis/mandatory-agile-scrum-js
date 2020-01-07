import React from 'react';
import Game from './Game';

const MatchLista = ({ allGames }) => {
  return (
    <div>
      {allGames.map(game => {
        return <Game data={game} />;
      })}
    </div>
  );
};

export default MatchLista;
