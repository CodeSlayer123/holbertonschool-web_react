import logo from '../assets/holberton_logo.jpg';
import {getFullYear} from '../utils/utils.js';
import {getFooterCopy} from '../utils/utils.js';
import React from 'react';


import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

  AppLogo: {
    height: '20vmin',
    pointerEvents: 'none',
    alignSelf: 'left',
    marginLeft: '-1300px'
    },

  h1:{
    display: 'inline',
    marginTop: '-200px !important',
    fontSize: '42px',
    fontFamily:"'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans-serif'",
    },

  AppHeader: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'red',
    display: 'inline',
    fontSize: '24px',
    },

  });


function App() {
  return (
    <header className= {css(styles.AppHeader)}>

        <img src={logo} className= {css(styles.AppLogo)} alt="logo" />
        <h1 classname={css(styles.h1)}>School dashboard</h1>
    </header>


  );
}

export default App;
