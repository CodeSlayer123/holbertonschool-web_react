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

function Login({ login  }) {
  const [state, setState] = React.useState({
    email: '',
    password: '',
    enableSubmit: false
  })

  function handleLoginSubmit(event){
    event.preventDefault()
    console.log("LOGIN IS....")
    console.log(login)
    login(state.email, state.password)
  }

  function handleChangeEmail(event){
    if (state.email.length > 0 && state.password.length > 0){
      state.enableSubmit = true
    }
    setState({...state, email: event.target.value})


  }
  function handleChangePassword(event){
    if (state.email.length > 0 && state.password.length > 0){
      state.enableSubmit = true
    }
    setState({...state,password: event.target.value})
  }
  
  return (
    <React.Fragment>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.form)} onSubmit={handleLoginSubmit}>
          <div>
            <label className={css(styles.labelEmail)} for="email">email</label><br></br>
            <input className={css(styles.inputEmail)} type="email" value={state.email} name="email" onChange={handleChangeEmail}></input>
          </div>
          <div>
            <label className={css(styles.labelPassword)} for="password">password</label><br></br>
            <input className={css(styles.inputPassword)} type="password" value={state.password} name="password" onChange={handleChangePassword}></input>
          </div>
          
          <input type="submit" value="OK" className={css(styles.btn)} disabled={(state.enableSubmit === false)}/>
        </form>
        </React.Fragment>

  );
}

export default Login;
