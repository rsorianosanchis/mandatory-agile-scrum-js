import React, { Component, Fragment } from 'react';
import Game from './Game';


class MatchLista extends Component {
  state = {
    "games": [
      {
        "id": 223,
        "players": {
          "Black": "ibo",
          "White": "jhon"
        },
        "chessmans": "rnbqkbnr/1ppppp1p/6p1/p7/7P/2PP4/PP2PPP1/RNBQKBNR b KQkq h3 0 3",
        "owner": "ibo"
      },
      {
        "id": 823,
        "players": {
          "Black": "alex",
          "White": null
        },
        "chessmans": "rnbqkbnr/1ppppp1p/6p1/p7/7P/2PP4/PP2PPP1/RNBQKBNR b KQkq h3 0 3",
        "owner": "alex"
      }
    ]

  };

  async componentDidMount() {
    this.getGames();
  }

  componentDidUpdate() {


    const memmory = localStorage.getItem('games');
    this.setState({ allGames: JSON.parse(memmory) });
  }

  getGames = async () => {
    try {
      // const response = await axios.get('/api/seeks');
      // this.setState({ games: response.games });
      console.log(this.state.games);

      localStorage.setItem('games', JSON.stringify(this.state.allGames));
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (

      <Fragment>
        {this.state.games.map(game => {
          return <Game key={game.id} data={game} />;
        })}

      </Fragment>


    )
  }
}


// const MatchLista = ({ allGames }) => {
//   return (
//     <Fragment>
//       <h3 className='lista'>List of Games</h3>
//       {allGames.map(game => {
//         return <Game key={game.id} data={game} />;
//       })}
//     </Fragment>
//   );
// };

export default MatchLista;
