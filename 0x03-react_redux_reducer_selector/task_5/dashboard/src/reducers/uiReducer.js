import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/uiActionTypes';
const { Map } = require('immutable');


const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
})

export default function uiReducer(state = initialState, action){

    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER: {
          return state.set({
            ...state,
            isNotificationDrawerVisible: true,
          })
        }
        case HIDE_NOTIFICATION_DRAWER: {
            return state.set({
              ...state,
              isNotificationDrawerVisible: false,
            })
          }
          case LOGIN_SUCCESS: {
            return state.set({
              ...state,
              isUserLoggedIn: true,
            })
          }
          case LOGIN_FAILURE: {
            return state.set({
              ...state,
              isUserLoggedIn: false,
            })
          }
          case LOGOUT: {
            return state.set({
              ...state,
              isUserLoggedIn: false,
            })
          }
          default: {
            return state
          }
    }


}