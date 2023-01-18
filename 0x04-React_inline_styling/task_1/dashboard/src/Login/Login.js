import logo from '../assets/holberton_logo.jpg';
import {getFullYear} from '../utils/utils.js';
import {getFooterCopy} from '../utils/utils.js';
import React from 'react';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

  form:{
      alignItems: 'left',
      display: 'inline',
      paddingRight: '1500px',
      width: '100px'
      },
  label: {
      alignItems: 'left',
      display: 'inline',
      paddingRight: '1500px'

      }
  });

function App() {
  return (
    <React.Fragment>
        <p>Login to access the full dashboard</p>
        <form className= {css(styles.form)}>
          <label className={css(styles.label)} for="email">email</label><br></br>
          <input type="email"></input>
          <label className={css(styles.label)} for="password">password</label><br></br>
          <input type="password"></input>
          <button>OK</button>
        </form>
        </React.Fragment>

  );
}

export default App;
