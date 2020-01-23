import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
<<<<<<< HEAD
const axios = require('axios');

let obj =  {
  "id": 223,
  "players": {
      "Black": "ibo",
      "White": "jhon"
  },
  "chessmans": "rnbqkbnr/1ppppp1p/6p1/p7/7P/2PP4/PP2PPP1/RNBQKBNR b KQkq h3 0 3",
  "owner": "ibo",
  "test": "3",
  "test3":"ssss"
=======
import './bootstrap.min.css';
import MatchLista from './components/MatchLista';
import GameBoard from './components/gameBoard'
export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h4 className='title'>PLAY CHESS</h4>
        <Router>
          <div className="App">
            <Route exact path="/" component={MatchLista} />
            <Route path="/:gameId" component={GameBoard} />
          </div>
        </Router>
      </div>
    );
  }
>>>>>>> 21cc79266c0b1b58f1ac8457f811cf0f13630edf
}
