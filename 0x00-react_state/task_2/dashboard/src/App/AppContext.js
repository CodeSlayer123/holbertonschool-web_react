import React, { createContext } from 'react';

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

const AppContext = createContext({user, logout})

export default AppContext