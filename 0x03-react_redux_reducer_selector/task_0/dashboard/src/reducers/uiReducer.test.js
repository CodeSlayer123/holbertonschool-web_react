import uiReducer from './uiReducer';
import { assert } from 'chai';

const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
}

describe('Tests uiReducer', () => {
    it(' verifying the state returned by the uiReducer function equals the initial state when no action is passed', function(){
        assert.equal(uiReducer(undefined,{}), initialState)
    });
    it(' verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', function(){
        assert.equal(uiReducer(undefined, {type: 'SELECT_COURSE'}), initialState)
    });
    it(' verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', function(){
        assert.equal(uiReducer(undefined, {type: 'DISPLAY_NOTIFICATION_DRAWER'}), {
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: {}
        })
    });
  });