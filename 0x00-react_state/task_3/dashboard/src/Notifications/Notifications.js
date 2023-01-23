import React from 'react';
import {getLatestNotification} from '../utils/utils.js';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'

import { StyleSheet, css } from 'aphrodite';
const opacity = {
    from: {
        opacity: 0.5
    },
    to: {
        opacity: 1
    }

}
const bounce = {
    '0%': {
        transform: 'TranslateY(0px)'
    },
    '50%': {
        transform: 'TranslateY(-5px)'
    },
    '100%': {
        transform: 'TranslateY(5px)'
    },
    
}

const styles = StyleSheet.create({

    Notifications: {
        padding: '10px 10px 10px 10px',
        marginLeft: '1300px',
        marginBottom: '-200px',
        border: '2px',
        borderColor: 'red',
        height: '150px',
        borderStyle: 'dotted',
        fontWeight: 'normal',
        width: '500px',
        '@media (max-width: 900px)': {
            fontSize: '20px',
            marginLeft: '0px',
            marginBottom: '1000px',
            height: '225px'
          },
    },
    menuItem: {
        backgroundColor: '#fff8f8',
        ':hover': {
            cursor: 'pointer',
            animationName: [bounce, opacity],
            animationDuration: '0.5s, 1s',
            animationIterationCount: '3'
          },
    },

  });


export default class Notifications extends React.PureComponent {
    

    render(){
    const { displayDrawer } = this.props
    const { listNotifications } = this.props

    return(
        <React.Fragment>
            <div className= {css(styles.menuItem)} style={{'padding-left': '1700px'}}>
                <div classname='notifs'onClick={this.props.handleDisplayDrawer}>Your notifications</div>
            </div>
            {displayDrawer ==true &&
                <div class= {css(styles.Notifications)}>
                    {listNotifications.length ? (
                        <p>Here is the list of notifications</p>
                    ) : (
                        <p>No new notification for now</p>
                    )}
                    <button className='close'aria-label="Close" style={{ display: 'inline', bottom: '50px', left: '465px', position: "relative"}} onClick={this.props.handleHideDrawer} >
                        <img className={css(styles.closeIcon)} src={closeIcon} width="15px" height="15px" alt="close_icon"></img>
                    </button>
                    {listNotifications ? (listNotifications.map((notification) => (
                        <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markNotificationAsRead={this.props.markNotificationAsRead}/> ))) : (<tr>No course available yet</tr>)}
                </div>
            }
        </React.Fragment>

    )
    }
    
}

Notifications.propTypes = {
    displayDrawer: PropTypes.boolean,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,

};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => console.log("handleDisplayDrawer missing"),
    handleHideDrawer: () => console.log("handleHideDrawer missing"),
    markNotificationAsRead: (id) => console.log(`Notification ${id} has been marked as read`)

};

