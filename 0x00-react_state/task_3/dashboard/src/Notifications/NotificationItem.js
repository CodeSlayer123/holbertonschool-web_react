import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

    default : {
        color: "blue",
        listStyleType: 'none',
        '@media (max-width: 900px)': {
            fontSize: '20px',
            borderBottom: '1px solid black',
            padding: '10px 8px',
            
          },

    },
    urgent : {
        color: "red",
        fontWeight: "bold",
        listStyleType: 'none',
        '@media (max-width: 900px)': {
            fontSize: '20px',
            borderBottom: '1px solid black',
            padding: '10px 8px',

          },

    }
  });


 function NotificationItem({markAsRead, type, value, html, id}){
    if (value){
        return(
            <li className={css(type == "default" ? styles.default : styles.urgent)} data-priority={type} onClick={() => markNotificationAsRead(id)}>
                {value}
                </li>
        )
    }
    else{
        return(
            <li className={css(type == "default" ? styles.default : styles.urgent)} data-priority={type} onClick={() => markNotificationAsRead(id)} dangerouslySetInnerHTML={html}>
            </li>
        )
    }

}
NotificationItem.propTypes = {
    html : PropTypes.shape({__html: PropTypes.string}),
    type : PropTypes.string,
    value : PropTypes.string,
    markAsRead: PropTypes.func.isRequired,
    id: PropTypes.number,
    markNotificationAsRead: PropTypes.func,


};

NotificationItem.defaultProps = {
    type : 'default',
    id: 0,
    markNotificationAsRead: (id) => console.log(`Notification ${id} has been marked as read`)

  };

  export default React.memo(NotificationItem)