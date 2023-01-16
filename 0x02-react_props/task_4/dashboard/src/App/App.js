import logo from '../assets/holberton_logo.jpg';
import {getFullYear} from '../utils/utils.js';
import {getFooterCopy} from '../utils/utils.js';
import React from 'react';
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';



import './App.css';

function App({ isLoggedIn }) {
  if (isLoggedIn == false){
    return (
      <React.Fragment>
          <Notifications />
          <div className="App">
                <Header />
                <hr/>
                <body className="App-body">
                    <Login />
                </body>
                <hr/>
                <footer className="App-footer">
                    <Footer />
                </footer>
          </div>
      </React.Fragment>
    );
  }
  else{
    return (
      <React.Fragment>
          <Notifications />
          <div className="App">
                <Header />
                <hr/>
                <body className="App-body">
                    <CourseList />
                </body>
                <hr/>
                <footer className="App-footer">
                    <Footer />
                </footer>
          </div>
      </React.Fragment>
  
    );
  }

}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
