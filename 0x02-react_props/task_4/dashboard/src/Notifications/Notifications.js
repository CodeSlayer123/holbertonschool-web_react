import React from 'react';
import './Notifications.css';
import {getLatestNotification} from '../utils/utils.js';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';


export default function Notifications({displayDrawer}){
    return(
        <React.Fragment>
            <div className='menuItem' style={{'padding-left': '1700px'}}>
                Your notifications
            </div>
            {displayDrawer ==true &&
                <div class="Notifications">
                    <button aria-label="Close" style={{ display: 'inline', left: '1830px', position: "relative"}} onClick={function(){console.log('Close button has been clicked')}} >
                        <img src={closeIcon} width="15px" height="15px" alt="close_icon"></img>
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        <NotificationItem type="default" value="New course available"/>
                        <NotificationItem type="urgent" value="New resume available"/>
                        <NotificationItem type="urgent" html={{ __html: getLatestNotification()}}/>
                    </ul>
                </div>
            }


        </React.Fragment>

    )
}

Notifications.propTypes = {
    displayDrawer: PropTypes.boolean
};

Notifications.defaultProps = {
    displayDrawer: false
};

