import rootReducer from './rootReducer';
import { assert } from 'chai';
const { Map } = require('immutable');
import { combineReducers } from 'redux'

const initialState = {
    courses: Map({}),
    notifications: Map({}),
    ui: Map({})
  }
const rootreducer = combineReducer(
    {courses: courseReducer,
     notifications: notificationReducer,
     ui: uiReducer
    })
describe('Tests rootReducer', () => {
    it(' test the root reducer’s initial state ', function(){
        assert.equal(rootReducer(undefined,{}).toJS(), initialState)
    });

  });