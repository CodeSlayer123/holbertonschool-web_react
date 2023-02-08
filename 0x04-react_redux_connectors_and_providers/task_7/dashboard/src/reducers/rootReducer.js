
import { combineReducers } from 'redux'
import {courseReducer} from './courseReducer'
import {notificationReducer} from './notificationReducer'
import {uiReducer} from './uiReducer'

const rootReducer = {courses: courseReducer, notifications: notificationReducer, ui: uiReducer}
export default rootReducer
