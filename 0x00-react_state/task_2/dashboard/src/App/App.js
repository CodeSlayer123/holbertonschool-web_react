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
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';


const styles = StyleSheet.create({

  App: {
    textAlign: 'center'
  },

  AppLink: {
    color: '#61dafb'
  },

  AppBody: {
    height: '450px',
    overflow: 'hidden'

    },
/*
  AppBody p: {
    paddingTop: '50px',
    paddingLeft: '50px',
    textAlign: 'left'
    },
*/
  hr: {
    display: 'block',
    height: '1px',
    border: '0px',
    borderTop: '3px solid rgb(247, 13, 13)',
    margin: '1em 0',
    padding: '0'
    }



});



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
  static contextType = AppContext;

  constructor(props) {

    super(props);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this)
    this.handleHideDrawer = this.handleHideDrawer.bind(this)
    this.login = this.login.bind(this);
    this.state.logout = this.state.logout.bind(this);

    this.state = {displayDrawer: false, user: AppContext._currentValue.user, logout: AppContext._currentValue.logout};
  }
  handleDisplayDrawer(){
    this.setState({displayDrawer: true})
  }

  handleHideDrawer(){
    this.setState({displayDrawer: false})

  }

  login(email, password){
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true
      }
    })
  }

  logout(){
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      }
    })
  }


  eventListener = (event) => {
    if (event.ctrlKey && event.key == 'h'){
      alert('Logging you out')
      this.state.logout()
    }
  }
  componentDidMount(){
    window.addEventListener('keydown', this.eventListener)
  }

  componentWillUnmount(){
    window.addEventListener('keydown', this.eventListener)
  }



  render(){
    const isLoggedIn  = this.state.user.isLoggedIn

    if (isLoggedIn == false){
      return (
        <AppContext.Provider value={{user: this.state.user, logout: this.state.logout}}>

          <React.Fragment>
              <Notifications 
              listNotifications={listNotifications}
              displayDrawer={this.state.displayDrawer} 
              handleHideDrawer={this.handleHideDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}/>
              <div className= {css(styles.App)}>
                    <Header />
                    <hr className= {css(styles.hr)}/>
                    <body className= {css(styles.AppBody)}>
                    <BodySectionWithMarginBottom  title="Log in to continue">
                        <Login login={this.login}/>
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
                    <hr className= {css(styles.hr)}/>
                    <footer className= {css(styles.AppFooter)}>
                        <Footer />
                    </footer>
              </div>
          </React.Fragment>
        </AppContext.Provider>

      );
    }
    else{
      return (
        <AppContext.Provider value={{user: this.state.user, logout: this.state.logout}}>

          <React.Fragment>
              <Notifications
              listNotifications={listNotifications}
              displayDrawer={this.state.displayDrawer} 
              handleHideDrawer={this.handleHideDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer} />
              <div className={css(styles.App)}>
                    <Header />
                    <hr className= {css(styles.hr)}/>
                    <body className= {css(styles.AppBody)}>
                    <BodySectionWithMarginBottom title="Course list">
                        <CourseList listCourses={listCourses} />
                    </BodySectionWithMarginBottom>

                    </body>
                    <hr className= {css(styles.hr)}/>
                    <footer className={css(styles.AppFooter)}>
                        <Footer />
                    </footer>
              </div>
          </React.Fragment>
        </AppContext.Provider>

    
      );
    }
  }
  

}



export default App;