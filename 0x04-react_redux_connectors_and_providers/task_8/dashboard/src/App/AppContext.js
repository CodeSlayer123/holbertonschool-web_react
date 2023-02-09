import React, { createContext } from 'react';
import { configureStore } from '@reduxjs/toolkit';
//import uiReducer from '../reducers/uiReducer';
import rootReducer from '../reducers/rootReducer';


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
    reducer: rootReducer,
    preloadedState: {
        courses: rootReducer.courses(undefined, {}),
        notifications: rootReducer.notifications(undefined, {}),
        ui: rootReducer.ui(undefined, {}),
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: false,
    })
  });
  

const AppContext = createContext({user, logout, store})

export default AppContext