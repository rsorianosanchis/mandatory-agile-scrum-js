import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import './bootstrap.min.css';
import MatchLista from './components/MatchLista';
import GameBoard from './components/gameBoard'
export default class App extends Component {
  render() {
    return (
<<<<<<< HEAD
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
=======
      <div>

        <Router>
          <div className="App">
            <Route exact path="/" component={MatchLista} />
            <Route path="/:gameId" component={GameBoard} />
>>>>>>> 4aaca0c2fafb0b6ac586b706e1955986f43e0079
          </div>
        </Router>
      </div>
    );
  }
}
