import React, { createContext } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../reducers/uiReducer';

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

export const store = configureStore({
    reducer: uiReducer,
    preloadedState: {
      ui: uiReducer(undefined, {}),
    },
  });

const AppContext = createContext({user, logout, store})

export default AppContext