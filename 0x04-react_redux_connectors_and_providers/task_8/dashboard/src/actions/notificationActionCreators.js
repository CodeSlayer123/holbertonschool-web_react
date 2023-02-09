import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from './notificationActionTypes';
const { bindActionCreators } = require('redux');
import { createAsyncThunk } from '@reduxjs/toolkit';


export function markAsAread(index){
    return {type: MARK_AS_READ, index: index}
}

export function setNotificationFilter(filter){
    return {type: SET_TYPE_FILTER, filter: filter}

}
export function bound(){
    bindActionCreators({markAsAread, setNotificationFilter}, dispatch)
}

export function setLoadingState(bool){
    return {type: SET_LOADING_STATE, bool}
}

export function setNotifications(notifications){
    return {type: FETCH_NOTIFICATIONS_SUCCESS, notifications}
}

export const fetchNotifications = createAsyncThunk(
    async(user, thunkAPI) => {
        thunkAPI.dispatch(setLoadingState(true))
      const api = await fetch('../../dist/notifications.json');
      const json = await api.json()
      if (json.success){
        thunkAPI.dispatch(setNotifications(json))
      }
      thunkAPI.dispatch(setLoadingState(false))
    }
  )
