import React from 'react';
import '../style.css'
const Game = ({ data }) => {
  const handleClick = () => {
    //accept to play with spelare 1
  };
  return (
    <div className='media mt-3'>
      <div className='media-body'>
      <table>
      <tr>
        <th scope="row">Match Owner</th>
        <th>Color</th>
        <th>Player 1</th>
        <th>Player 2</th>
        <th>status</th>
      </tr>
        <tbody>
          <tr>
            <td><span>{data.owner}</span></td>
            <td>White</td>
            <td><tr><span>{data.owner}</span></tr></td>
            <td className="Awaiting-Player"><span >{data.spelare2 === '' ? data.spelare2 : 'Waiting for Player'} </span></td>
            <td>
            {data.spelare1 !== '' ? (
              <div className='btn' onClick={handleClick}>
                  Play
                  </div>
                    ) : (
                    <p>Spel i progress</p>
                  )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>


  );
};
export default Game;
