import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

    default : {
        color: "blue"
    },
    urgent : {
        color: "red"
    }
  });


 function NotificationItem({markAsRead, type, value, html, id}){
    if (value){
        return(
            <li className={css(type == "default" ? styles.default : styles.urgent)} data-priority={type} onClick={() => markAsRead(id)}>
                {value}
                </li>
        )
    }
    else{
        return(
            <li className={css(type == "default" ? styles.default : styles.urgent)} data-priority={type} onClick={() => markAsRead(id)} dangerouslySetInnerHTML={html}>
            </li>
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