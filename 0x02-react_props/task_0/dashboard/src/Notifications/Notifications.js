import React from 'react';
import './Notifications.css';
import {getLatestNotification} from '../utils/utils.js';
import closeIcon from '../assets/close-icon.png';


export default function Notifications(){
    return(
        <div class="Notifications">
            <button aria-label="Close" style={{ display: 'inline', left: '1830px', position: "relative"}} onClick={function(){console.log('Close button has been clicked')}} >
                <img src={closeIcon} width="15px" height="15px" alt="close_icon"></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification()}}></li>

            </ul>
        </div>

    )
}

