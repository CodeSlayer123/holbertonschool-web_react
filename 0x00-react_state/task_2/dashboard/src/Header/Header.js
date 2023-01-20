import logo from '../assets/holberton_logo.jpg';
import {getFullYear} from '../utils/utils.js';
import {getFooterCopy} from '../utils/utils.js';
import React from 'react';
import AppContext from '../App/AppContext';


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


function Header() {
  const context = React.useContext(AppContext);

  return (
    <header className= {css(styles.AppHeader)}>
      {context.user.isLoggedIn === true &&
        <div id='logoutSection'>
            Welcome {context.user.email} <a onClick={context.logout} href="#">(logout)</a>
        </div>
      }
        
        <img src={logo} className= {css(styles.AppLogo)} alt="logo" />
        <h1 classname={css(styles.h1)}>School dashboard</h1>
    </header>


  );
}

export default Header;
