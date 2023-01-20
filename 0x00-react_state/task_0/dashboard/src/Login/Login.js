import logo from '../assets/holberton_logo.jpg';
import {getFullYear} from '../utils/utils.js';
import {getFooterCopy} from '../utils/utils.js';
import React from 'react';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

  form:{
      alignItems: 'left',
       paddingRight: '400px',
      display: 'inline',
      width: '100px',
      '@media (max-width: 900px)': {
        maxWidth: '250px'
      },
      },
    labelEmail: {
      alignItems: 'left',
      paddingRight: '400px',
      display: 'inline',


      '@media (min-width: 900px)': {
      },

    },
    labelPassword: {
      alignItems: 'left',
      paddingRight: '400px',

      '@media (min-width: 900px)': {
      },

    },
    inputEmail: {
      alignItems: 'left',
      display: 'inline',

      '@media (min-width: 900px)': {
      },

    },
    inputPassword: {
      alignItems: 'left',

      '@media (min-width: 900px)': {
      },

    },

    btn: {
      marginTop: '30px',

      '@media (min-width: 900px)': {
      },

    }
  });

function App() {
  return (
    <React.Fragment>
        <p>Login to access the full dashboard</p>
        <form className= {css(styles.form)}>
          <div>
            <label className={css(styles.labelEmail)} for="email">email</label><br></br>
            <input className={css(styles.inputEmail)} type="email"></input>
          </div>
          <div>
            <label className={css(styles.labelPassword)} for="password">password</label><br></br>
            <input className={css(styles.inputPassword)} type="password"></input>
          </div>
          
          <button className={css(styles.btn)}>OK</button>
        </form>
        </React.Fragment>

  );
}

export default App;
