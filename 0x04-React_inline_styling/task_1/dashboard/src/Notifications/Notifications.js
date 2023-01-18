import React from 'react';
import './Notifications.css';
import {getLatestNotification} from '../utils/utils.js';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

    Notifications: {
        padding: '10px 10px 10px 10px',
        marginLeft: '1300px',
        marginBottom: '-200px',
        border: '2px',
        borderColor: 'red',
        height: '150px',
        borderStyle: 'dotted',
        fontWeight: 'bold',
        width: '500px'
    },
    menuItem: {

    }
  });


export default class Notifications extends React.Component{
    shouldComponentUpdate(nextProps){
        return nextProps.listNotifications.length > this.props.listNotifications.length
    }
    markAsRead(id){
        console.log(`Notification ${id} has been marked as read`)
    }
    render(){
    const { displayDrawer } = this.props
    const { listNotifications } = this.props

    return(
        <React.Fragment>
            <div className= {css(styles.menuItem)} style={{'padding-left': '1700px'}}>
                Your notifications
            </div>
            {displayDrawer ==true &&
                <div class= {css(styles.Notifications)}>
                    {listNotifications.length ? (
                        <p>Here is the list of notifications</p>
                    ) : (
                        <p>No new notification for now</p>
                    )}
                    <button aria-label="Close" style={{ display: 'inline', left: '1830px', position: "relative"}} onClick={function(){console.log('Close button has been clicked')}} >
                        <img src={closeIcon} width="15px" height="15px" alt="close_icon"></img>
                    </button>
                    {listNotifications ? (listNotifications.map((notification) => (
                        <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={() => this.markAsRead(notification.id)}/> ))) : (<tr>No course available yet</tr>)}
                </div>
            }
        </React.Fragment>

    )
    }
    
}

Notifications.propTypes = {
    displayDrawer: PropTypes.boolean,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)

};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []

};

