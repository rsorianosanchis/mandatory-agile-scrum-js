import React from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios');

let obj = {
  spelare1 : "hesham",
  spelare4 : "Ric",
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
