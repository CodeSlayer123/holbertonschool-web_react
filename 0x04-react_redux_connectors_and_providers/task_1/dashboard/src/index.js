import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { ReduxApp } from './App/App';
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './reducers/uiReducer';
import { Provider } from 'react-redux';
//import Notifications from './Notifications/Notifications';
import {store} from './App/AppContext'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

        <ReduxApp />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

/*
<div id="root-notifications">
      <Notifications />
    </div>
*/