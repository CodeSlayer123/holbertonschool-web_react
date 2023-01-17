import React from 'react';
import PropTypes from 'prop-types';


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
NotificationItem.propTypes = {
    html : PropTypes.shape({__html: PropTypes.string}),
    type : PropTypes.string,
    value : PropTypes.string
};

NotificationItem.defaultProps = {
    type : PropTypes.default,
  };
