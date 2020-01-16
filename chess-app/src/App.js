import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './App.css';
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
}
