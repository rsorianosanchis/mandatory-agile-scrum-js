import React from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios');

let obj = {
  "gameUUID": {
      "players": {
          "Black": "ibo",
          "White": "jhon"
      },
      "chessmans": "rnbqkbnr/1ppppp1p/6p1/p7/7P/2PP4/PP2PPP1/RNBQKBNR b KQkq h3 0 3",
      "owner": "ibo"
  },
  "gameUUsID": {
      "players": {
          "Black": "alex",
          "White": null
      },
      "chessmans": "rnbqkbnr/1ppppp1p/6p1/p7/7P/2PP4/PP2PPP1/RNBQKBNR b KQkq h3 0 3",
      "owner": "alex"
  }
}



axios.post("http://localhost:4000/api/seeks",obj)
.then(res=>{console.log(res)})


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
