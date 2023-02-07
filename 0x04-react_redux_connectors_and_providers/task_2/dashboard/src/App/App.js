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
import * as uiActions from '../actions/uiActionCreators';
import { connect } from 'react-redux';
import {loginRequest} from '../actions/uiActionCreators'
import {ConnectedFooter} from '../Footer/Footer';
import {ConnectedHeader} from '../Header/Header'

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

    this.state = {user: AppContext._currentValue.user, logout: AppContext._currentValue.logout, listNotifications : listNotifications};
    this.login = this.login.bind(this);
    this.state.logout = this.state.logout.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);

    this.state.user.isLoggedIn = this.props.isLoggedIn;

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

  markNotificationAsRead(id){

    let newListNotifications = this.state.listNotifications.filter(function(notification) {
      return notification.id !== id
  })

    this.setState({
      listNotifications: newListNotifications
    });

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
        <AppContext.Provider value={{user: this.props.user, logout: this.props.logout}}>

          <React.Fragment>
              <Notifications 
              listNotifications={this.state.listNotifications}
              displayDrawer={this.props.displayDrawer} 
              handleHideDrawer={this.props.hideNotificationDrawer}
              handleDisplayDrawer={this.props.displayNotificationDrawer}
              markNotificationAsRead={this.markNotificationAsRead}/>
              <div className= {css(styles.App)}>
                    <ConnectedHeader />
                    <hr className= {css(styles.hr)}/>
                    <body className= {css(styles.AppBody)}>
                    <BodySectionWithMarginBottom  title="Log in to continue">
                        <Login login={this.login} loginRequest={this.props.loginRequest} />
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
                        <ConnectedFooter />
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
              listNotifications={this.state.listNotifications}
              displayDrawer={this.props.displayDrawer} 
              handleHideDrawer={this.props.hideNotificationDrawer}
              handleDisplayDrawer={this.props.displayNotificationDrawer}
              markNotificationAsRead={this.markNotificationAsRead}/>
              <div className={css(styles.App)}>
                    <ConnectedHeader />
                    <hr className= {css(styles.hr)}/>
                    <body className= {css(styles.AppBody)}>
                    <BodySectionWithMarginBottom title="Course list">
                        <CourseList listCourses={listCourses} />
                    </BodySectionWithMarginBottom>

                    </body>
                    <hr className= {css(styles.hr)}/>
                    <footer className={css(styles.AppFooter)}>
                        <ConnectedFooter />
                    </footer>
              </div>
          </React.Fragment>
        </AppContext.Provider>


      );
    }
  }


}
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false

};
export function mapStateToProps(state){
  return {
    isLoggedIn: state.ui.get('isUserLoggedIn'),
    displayDrawer: state.ui.get('isNotificationDrawerVisible'),
    user: state.ui.get('user')
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: () => dispatch(uiActions.loginSuccess()),
    displayNotificationDrawer: () => dispatch(uiActions.displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(uiActions.hideNotificationDrawer()),
    loginRequest: (user) => dispatch(uiActions.loginRequest(user)),

  }
}
export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);


export default App;