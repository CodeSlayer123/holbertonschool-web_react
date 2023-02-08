import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure } from './uiActionCreators';
import { assert } from 'chai';

const login = {
    type: 'LOGIN',
    user: {
        email: 'email',
        password: 'password'
    }
}
const logout = {
    type: 'LOGOUT',
}
const displayNotificationDrawer = {
    type: 'DISPLAY_NOTIFICATION_DRAWER',
}
const hideNotificationDrawer = {
    type: 'HIDE_NOTIFICATION_DRAWER',
}
const loginSuccess = {
    type: 'LOGIN_SUCCESS',
}

const loginFailure = {
    type: 'LOGIN_FAILURE',
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
        assert.equal(hideNotificationDrawer(), hideNotificationDrawer)
      });
    it('tests loginSuccess action', function(){
        assert.equal(loginSuccess(), loginSuccess)
    });
    it('tests loginFailure action', function(){
        assert.equal(loginFailure(), loginFailure)
      });

    it('tests loginSuccess action with api', async function(){
    const request = await loginRequest('email', 'password')
        assert.equal(request, loginSuccess)
    });

    it('tests loginFailure action with api', async function(){
        const request = await loginRequest('email', 'password')
        assert.equal(request, loginFailure)
        });
  });