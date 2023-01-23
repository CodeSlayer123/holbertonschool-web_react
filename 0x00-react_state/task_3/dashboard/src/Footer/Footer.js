import logo from '../assets/holberton_logo.jpg';
import {getFullYear} from '../utils/utils.js';
import {getFooterCopy} from '../utils/utils.js';
import React from 'react';
import AppContext from '../App/AppContext';



import './Footer.css';

function Footer() {
  const { user } = React.useContext(AppContext);



 
  return (
    <React.Fragment>

        <p><i><b>Copyright {getFullYear()} - {getFooterCopy(true)}</b></i></p>
        
        {user.isLoggedIn &&
          <p><a href="#"></a>Contact us</p>}
    </React.Fragment>


  );
}

export default Footer;
