import React from 'react';


 export default function NotificationItem({type, html, value}){
    if (value){
        return(
            <li data-priority={type}>{value}</li>
        )
    }
    else{
        return(
            <li data-priority={type} dangerouslySetInnerHTML={html}></li>
        )
    }

}

