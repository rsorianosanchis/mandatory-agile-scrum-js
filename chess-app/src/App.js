import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import MatchLista from './components/MatchLista';
import NewGame from './components/NewGame';
import GameBoard from './components/gameBoard'
const axios = require('axios');

// let obj = {
//   "id": 223,
//   "players": {
//     "Black": "ibo",
//     "White": "jhon"
//   },
//   "chessmans": "rnbqkbnr/1ppppp1p/6p1/p7/7P/2PP4/PP2PPP1/RNBQKBNR b KQkq h3 0 3",
//   "owner": "ibo",
//   "test": "hesham"
// }



// axios.put("http://localhost:4000/api/seeks/223", obj)
//   .then(res => { console.log(res) })

// axios.get("http://localhost:4000/api/seeks")
//   .then(res => { console.log(res) })


export default class App extends Component {


  render() {
    return (
      <div className='container'>
        <div className=''>
          <h4 className='title'>Chess project</h4>
          <NewGame />
          <MatchLista />
          <GameBoard />
        </div>
      </div>
    );
  }
}


