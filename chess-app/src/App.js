import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import MatchLista from './components/MatchLista';
import NewGame from './components/NewGame';
import GameBoard from './components/gameBoard'

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
          <GameBoard />


        </div>
      </div>
    );
  }
}
