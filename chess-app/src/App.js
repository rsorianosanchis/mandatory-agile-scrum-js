import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import MatchLista from './components/MatchLista';
import NewGame from './components/NewGame';
const axios = require('axios');

let obj = {
  "id": 223,
  "players": {
    "Black": "ibo",
    "White": "jhon"
  },
  "chessmans": "rnbqkbnr/1ppppp1p/6p1/p7/7P/2PP4/PP2PPP1/RNBQKBNR b KQkq h3 0 3",
  "owner": "ibo",
  "test": "hesham"
}



axios.put("http://localhost:4000/api/seeks/223", obj)
  .then(res => { console.log(res) })

axios.get("http://localhost:4000/api/seeks")
  .then(res => { console.log(res) })

const axios = require('axios');

export default class App extends Component {
  state = { allGames: [] };

  async componentDidMount() {
    this.getGames();
  }

  componentDidUpdate() {
    const memmory = localStorage.getItem('games');
    this.setState({ allGames: JSON.parse(memmory) });
  }

  getGames = async () => {
    try {
      const response = await axios.get('/api/seeks');
      this.setState({ allGames: response.allGames });
      localStorage.setItem('games', JSON.stringify(this.state.allGames));
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className='container'>
        <div className=''>
          <h4 className='title'>Chess project</h4>
          <MatchLista allGames={this.state.allGames} />
          <NewGame />
          <GameBoard />
        </div>
      </div>
    );
  }
}

export default App