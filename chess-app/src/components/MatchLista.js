import React, { Component, Fragment } from 'react';
import Game from './Game';
const axios = require('axios');
// let obj = {
//   "id": 1332,
//   "players": {
//     "Black": "ibo",
//     "White": "jhon"
//   },
//   "chessmans": "rnbqkbnr/1ppppp1p/6p1/p7/7P/2PP4/PP2PPP1/RNBQKBNR b KQkq h3 0 3",
//   "owner": "ibo"
// }



// axios.get("http://localhost:4000/api/seeks")
//   .then(res => { console.log(res) })



class MatchLista extends Component {
  state = { allGames: [] };

  async componentDidMount() {
    this.getGames();
  }



  getGames = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/seeks');
      console.log(response.data);

      this.setState({ allGames: response.data });
      console.log(this.state.allGames);

      localStorage.setItem('games', JSON.stringify(this.state.allGames));
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (

      <Fragment>
        {this.state.allGames.map(game => {
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
