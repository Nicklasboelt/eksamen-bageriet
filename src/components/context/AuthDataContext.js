import React, { createContext, useState} from 'react';

export const AuthDataContext = createContext();

const AuthDataProvider = props => {

    const [loggedIn, setLoggedin] = useState();

    const onLogout = () => {
        console.log("AUTHDATACONTEXT onlogout")
        setLoggedin(false)
    };

    const onLogin = (logindata) => {
        console.log("ATUHDATACONTEXT on login", logindata)
        setLoggedin(true)
    }

    return (
        <AuthDataContext.Provider value={{ loggedIn, onLogin, onLogout}}>
            {props.children}
        </AuthDataContext.Provider>
    )

};



export default AuthDataProvider
