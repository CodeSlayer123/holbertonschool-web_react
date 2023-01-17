import React from 'react';
import PropTypes from 'prop-types';


 export default function NotificationItem({type, html, value, markAsRead}){
    if (value){
        return(
            <li data-priority={type} onClick={markAsRead} >{value}</li>
        )
    }
    else{
        return(
            <li data-priority={type} onClick={markAsRead} dangerouslySetInnerHTML={html}></li>
        )
    }

}
NotificationItem.propTypes = {
    html : PropTypes.shape({__html: PropTypes.string}),
    type : PropTypes.string,
    value : PropTypes.string,
    markAsRead: PropTypes.func.isRequired

};

NotificationItem.defaultProps = {
    type : PropTypes.default,
  };
