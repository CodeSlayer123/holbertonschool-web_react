import React, { createContext } from 'react';

const user = {
    email: "",
    password: "",
    isLoggedIn: false
}

function logOut(){
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

const AppContext = createContext({user, logOut})

export default AppContext