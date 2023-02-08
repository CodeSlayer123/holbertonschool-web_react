import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { ConnectedApp } from './App/App';
import { Provider } from 'react-redux';
//import Notifications from './Notifications/Notifications';
import {store} from './App/AppContext'

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

        <ConnectedApp />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

/*
<div id="root-notifications">
      <Notifications />
    </div>
*/