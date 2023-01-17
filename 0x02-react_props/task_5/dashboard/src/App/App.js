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
import { getLatestNotification } from '../utils/utils';



import './App.css';
const listCourses = [
  {id: '1', name:  'ES6', credit: 60},
  {id: '2', name:  'Webpack', credit: 20},
  {id: '2', name:  'React', credit: 40}
]

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];
function App({ isLoggedIn }) {
  if (isLoggedIn == false){
    return (
      <React.Fragment>
          <Notifications listNotifications={listNotifications} />
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
          <Notifications listNotifications={listNotifications} />
          <div className="App">
                <Header />
                <hr/>
                <body className="App-body">
                    <CourseList listCourses={listCourses} />
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
