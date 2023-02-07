import uiReducer from './uiReducer';
import { assert } from 'chai';
const { Map } = require('immutable');

const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
})

describe('Tests uiReducer', () => {
    it(' verifying the state returned by the uiReducer function equals the initial state when no action is passed', function(){
        assert.equal(uiReducer(undefined,{}).toJS(), initialState)
    });
    it(' verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', function(){
        assert.equal(uiReducer(undefined, {type: 'SELECT_COURSE'}).toJS(), initialState)
    });
    it(' verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', function(){
        assert.equal(uiReducer(undefined, {type: 'DISPLAY_NOTIFICATION_DRAWER'}).toJS(), Map({
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: {}
        }))
    });
  });