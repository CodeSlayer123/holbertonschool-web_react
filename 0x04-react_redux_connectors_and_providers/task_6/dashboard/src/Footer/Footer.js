import logo from '../assets/holberton_logo.jpg';
import {getFullYear} from '../utils/utils.js';
import {getFooterCopy} from '../utils/utils.js';
import React from 'react';
import AppContext from '../App/AppContext';
import { connect } from 'react-redux';



import './Footer.css';

function Footer({user}) {
  //const { user } = React.useContext(AppContext);

  return (
    <React.Fragment>

        <p><i><b>Copyright {getFullYear()} - {getFooterCopy(true)}</b></i></p>

        {user.isLoggedIn &&
          <p><a href="#">Contact us</a></p>}
    </React.Fragment>


  );
}
export function mapStateToProps(state) {
  return {
    user: state.ui.get('user')
  }
}
export const ConnectedFooter = connect(mapStateToProps)(Footer)
export default Footer;
