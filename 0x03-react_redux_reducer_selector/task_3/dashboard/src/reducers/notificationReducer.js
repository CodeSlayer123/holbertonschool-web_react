import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters} from '../actions/notificationActionTypes';
const { Map } = require('immutable');


const initialState = [{
    notifications: [],
    filter: NotificationTypeFilters.DEFAULT
}]
export default function notificationReducer(state = initialState, action){

    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
          return state.map((notification) => ({
            ...notification,
            notifications: success,
            filter: state.filter,
            isRead: false
          }))
        }
        case MARK_AS_READ: {
            return state.notifications.map((notification) => {
                if (notification.index == action.index){
                     return {...notification, isRead: true}
                } else {
                    return notification
                }
            })
          }

        case SET_TYPE_FILTER: {
            return {notifications: state.notifications, filter: action.filter}
        }

        default: {
            return state
        }
    }


}