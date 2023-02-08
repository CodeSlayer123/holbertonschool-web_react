import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE} from './uiActionTypes';
const { bindActionCreators } = require('redux');
import { createAsyncThunk } from '@reduxjs/toolkit'


export function login(email, password ){
    return {type: LOGIN, user: { email, password }}
}

export function logout(){
    return {type: LOGOUT}
}

export function displayNotificationDrawer(){
    return {type: DISPLAY_NOTIFICATION_DRAWER}
}

export function hideNotificationDrawer(){
    return {type: HIDE_NOTIFICATION_DRAWER}
}

export function loginSuccess(){
    return {type: LOGIN_SUCCESS}
}
export function loginFailure(){
    return {type: LOGIN_FAILURE}
}


/*
export async function loginRequest(email, password){
    dispatch(login(email, password))
    const api = await fetch('../../dist/login-success.json');
    const json = await api.json()
    if (json.success){
        dispatch(loginSuccess())
    } else{
        dispatch(loginFailure())
    }
}
*/
export const loginRequest = createAsyncThunk(
    LOGIN,
    async (user, thunkAPI) => {
      const api = await fetch('../../dist/login-success.json');
      const json = await api.json()
      if (json.success){
        thunkAPI.dispatch(login(user.email, user.password))
        thunkAPI.dispatch(loginSuccess())
      } else{
        thunkAPI.dispatch(loginFailure())
      }
    }
  )


export function bound(){
    bindActionCreators({login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure, loginRequest}, dispatch)
}