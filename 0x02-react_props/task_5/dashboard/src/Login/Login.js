import logo from '../assets/holberton_logo.jpg';
import {getFullYear} from '../utils/utils.js';
import {getFooterCopy} from '../utils/utils.js';
import React from 'react';


import './Login.css';

function App() {
  return (
    <React.Fragment>
        <p>Login to access the full dashboard</p>
        <form className="form-1">
          <label for="email">email</label><br></br>
          <input type="email"></input>
          <label for="password">password</label><br></br>
          <input type="password"></input>
          <button>OK</button>
        </form>
        </React.Fragment>

  );
}

export default App;
