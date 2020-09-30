import React, { createContext, useState} from 'react';

export const AuthDataContext = createContext();

const AuthDataProvider = props => {

    const [loggedIn, setLoggedin] = useState();
    const [brugerData, setBrugerData] = useState({});

    const onLogout = () => {
        console.log("AUTHDATACONTEXT onlogout")
        setLoggedin(false)
        
    };

    const onLogin = (logindata) => {
        console.log("ATUHDATACONTEXT on login", logindata)
        setBrugerData(logindata)
        setLoggedin(true)
        
    }

    console.log("Brugerstate ", brugerData)

    return (
        <AuthDataContext.Provider value={{ loggedIn, brugerData, onLogin, onLogout}}>
            {props.children}
        </AuthDataContext.Provider>
    )
    

};



export default AuthDataProvider
