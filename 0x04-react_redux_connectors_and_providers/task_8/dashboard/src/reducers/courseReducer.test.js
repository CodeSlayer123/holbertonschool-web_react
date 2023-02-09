import courseReducer from './courseReducer';
import { assert } from 'chai';
const { Map } = require('immutable');

const initialState = []

const data = [
    {
      id: 1,
      name: "ES6",
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      credit: 20
    },
    {
      id: 3,
      name: "React",
      credit: 40
    }
  ]

  const selected_data = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: true,
      credit: 20
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40
    }
  ]

  const unselected_data = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: false,
      credit: 20
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40
    }
  ]

describe('Tests courseReducer', () => {
    it('  default state returns an empty array', function(){
        assert.equal(courseReducer(undefined,{type: undefined}).toJS(), initialState)
    });
    it(' FETCH_COURSE_SUCCESS returns the data passed', function(){
        assert.equal(courseReducer(data,{type: 'FETCH_COURSE_SUCCESS'}).toJS(), data)
    });
    it(' SELECT_COURSE returns the data with the right item updated', function(){
        assert.equal(uiReducer(selected_data, {type: 'SELECT_COURSE', index: 2}).toJS(), selected_data)
    });
    it(' verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', function(){
        assert.equal(uiReducer(unselected_data, {type: 'UNSELECT_COURSE ', index: 2}).toJS(), unselected_data)

    });
  });