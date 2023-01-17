import React from 'react';
import './Notifications.css';
import {getLatestNotification} from '../utils/utils.js';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'


export default function Notifications({displayDrawer, listNotifications }){
    return(
        <React.Fragment>
            <div className='menuItem' style={{'padding-left': '1700px'}}>
                Your notifications
            </div>
            {displayDrawer ==true &&
                <div class="Notifications">
                    {listNotifications.length ? (
                        <p>Here is the list of notifications</p>
                    ) : (
                        <p>No new notification for now</p>
                    )}
                    <button aria-label="Close" style={{ display: 'inline', left: '1830px', position: "relative"}} onClick={function(){console.log('Close button has been clicked')}} >
                        <img src={closeIcon} width="15px" height="15px" alt="close_icon"></img>
                    </button>
                    {listNotifications ? (listNotifications.map((notification) => (
                        <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} /> ))) : (<tr>No course available yet</tr>)}
                </div>
            }
        </React.Fragment>

    )
}

Notifications.propTypes = {
    displayDrawer: PropTypes.boolean,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)

};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []

};

