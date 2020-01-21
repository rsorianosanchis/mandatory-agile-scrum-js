import React, { Component } from 'react';
//import './App.css';
import './bootstrap.min.css';
import MatchLista from './components/MatchLista';
import NewGame from './components/NewGame';

export default class App extends Component {


  render() {
    return (
      <div className='container'>
        <div className=''>
          <h4 className='title'>Chess project</h4>
          <NewGame />
          <MatchLista />

        </div>
      </div>
    );
  }
}
