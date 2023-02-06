import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { ReduxApp } from './App/App';

//import { configureStore } from '@reduxjs/toolkit'
//import { combineReducers } from 'redux';
//import { uiReducer as ui } from './reducers/uiReducer';
//import { courseReducer as course } from './reducers/courseReducer';
//import { notificationReducer as notifications } from './reducers/notificationReducer';
//import { Provider } from 'react-redux';

//import Notifications from './Notifications/Notifications';

//const store = configureStore({ reducer: combineReducers({ui, course, notifications})})

ReactDOM.render(
  <React.StrictMode>

        <ReduxApp />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
<div id="root-notifications">
      <Notifications />
    </div>
*/