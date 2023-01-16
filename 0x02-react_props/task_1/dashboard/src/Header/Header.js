import logo from '../assets/holberton_logo.jpg';
import {getFullYear} from '../utils/utils.js';
import {getFooterCopy} from '../utils/utils.js';
import React from 'react';


import './Header.css';

function App() {
  return (
    <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
    </header>

      
  );
}

export default App;
