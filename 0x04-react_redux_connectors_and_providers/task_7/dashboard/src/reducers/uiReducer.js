import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/uiActionTypes';
const { Map } = require('immutable');


const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
})

export function uiReducer(state = initialState, action){

    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER: {
          return state.set('isNotificationDrawerVisible', true)
        }
        case HIDE_NOTIFICATION_DRAWER: {
          return state.set('isNotificationDrawerVisible', false)
          }
          case LOGIN_SUCCESS: {
            return {
              ...state,
              ui: state.ui.set('isUserLoggedIn', true),
            };
          }
          case LOGIN_FAILURE: {

            return {
              ...state,
              ui: state.ui.set('isUserLoggedIn', false),
            };

          }
          case LOGOUT: {
            return {
              ...state,
              ui: state.ui.set('isUserLoggedIn', false),
              user: state.ui.set('user', null),

            };
          }
          case LOGIN: {
            return {
              ...state,
              ui: state.ui.setIn(['user', 'email'], action.user.email).setIn(['user', 'password'], action.user.password),
            };

          }
          default: {
            return state
          }
    }


}