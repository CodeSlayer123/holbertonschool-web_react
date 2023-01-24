import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { assert } from 'chai';

const login = {
    type: LOGIN,
    user: {
        email: 'email',
        password: 'password'
    }
}
const logout = {
    type: LOGOUT,
}
const displayNotificationDrawer = {
    type: DISPLAY_NOTIFICATION_DRAWER,
}
const loghideNotificationDrawerout = {
    type: HIDE_NOTIFICATION_DRAWER,
}
describe('Tests uiActionCreators', () => {
    it('tests LOGIN action', function(){
      assert.equal(login('email', 'password'), login)
    });
    it('tests LOGOUT action', function(){
        assert.equal(logout(), logout)
      });
    it('tests displayNotificationDrawer action', function(){
    assert.equal(displayNotificationDrawer(), displayNotificationDrawer)
    });
    it('tests hideNotificationDrawer action', function(){
        assert.equal(loghideNotificationDrawerout(), loghideNotificationDrawerout)
      });
  });