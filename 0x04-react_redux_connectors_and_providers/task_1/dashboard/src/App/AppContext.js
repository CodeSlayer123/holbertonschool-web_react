import React, { createContext } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../reducers/uiReducer';

const store = configureStore({
    reducer: uiReducer,
    preloadedState: {
      ui: uiReducer(undefined, {}),
    },
    middleware: (getDefault) => getDefault({ serializableCheck: false })
  });
  
const user = {
    email: "",
    password: "",
    isLoggedIn: false
}

function logout(){
    this.setState({
        user: {
            email: "",
            password: "",
            isLoggedIn: false
        }
    })

    this.context.user = {
        email: "",
        password: "",
        isLoggedIn: false

    }
}

const AppContext = createContext({user, logout, store})

export default AppContext