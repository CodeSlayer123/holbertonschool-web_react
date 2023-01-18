import logo from '../assets/holberton_logo.jpg';
import {getFullYear} from '../utils/utils.js';
import {getFooterCopy} from '../utils/utils.js';
import React from 'react';


import './Footer.css';

function App() {
  return (

        <p><i><b>Copyright {getFullYear()} - {getFooterCopy(true)}</b></i></p>

  );
}

export default App;
