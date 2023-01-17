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
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';


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
class App extends React.Component {
  
  eventListener = (event) => {
    if (event.ctrlKey && event.key == 'h'){
      const { logOut } = this.props
      alert('Logging you out')
      logOut()
    }
  }
  componentDidMount(){
    window.addEventListener('keydown', this.eventListener)
  }

  componentWillUnmount(){
    window.addEventListener('keydown', this.eventListener)
  }



  render(){
    const { isLoggedIn } = this.props

    if (isLoggedIn == false){
      return (
        <React.Fragment>
            <Notifications listNotifications={listNotifications} />
            <div className="App">
                  <Header />
                  <hr/>
                  <body className="App-body">
                  <BodySectionWithMarginBottom  title="Log in to continue">
                      <Login />
                    </BodySectionWithMarginBottom >
                  <BodySection title="News from the School">
                    <p>To sure calm much most long me mean.
                      Able rent long in do we.
                      Uncommonly no it announcing melancholy an in.
                      Mirth learn it he given.
                      Secure shy favour length all twenty denote.
                      He felicity no an at packages answered opinions juvenile.</p>
                  </BodySection>
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
                  <BodySectionWithMarginBottom title="Course list">
                      <CourseList listCourses={listCourses} />
                  </BodySectionWithMarginBottom>

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
  

}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}

};

export default App;
