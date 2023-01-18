import React from 'react';
import PropTypes from 'prop-types';


 function NotificationItem({markAsRead, type, value, html, id}){
    if (value){
        return(
            <li data-priority={type} onClick={() => markAsRead(id)}>{value}</li>
        )
    }
    else{
        return(
            <li data-priority={type} onClick={() => markAsRead(id)} dangerouslySetInnerHTML={html}></li>
        )
    }

}
NotificationItem.propTypes = {
    html : PropTypes.shape({__html: PropTypes.string}),
    type : PropTypes.string,
    value : PropTypes.string,
    markAsRead: PropTypes.func.isRequired,
    id: PropTypes.number

};

NotificationItem.defaultProps = {
    type : 'default',
    id: 0
  };

  export default React.memo(NotificationItem)