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

      <h4 className='title'>PLAY CHESS</h4>
      <div class="row">
          <div class="col">
            <MatchLista />
          </div>
          <div class="col-sm">
          <NewGame />
          </div>
          <div>
           <GameBoard />
          </div>



        </div>
      </div>
    );
  }
}
