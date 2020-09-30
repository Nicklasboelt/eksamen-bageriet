import axios from "axios"

const authAPI = {
    baseUrl: "http://localhost:5033/login/",
}

//--------------- LOGIN  ------------------------------------------
export const login = async (bruger) => {
    console.log("LOG IND")
    
    try {
        let response = await axios.post(authAPI.baseUrl + "login", bruger, { withCredentials: true })
        return response.data
    } catch (error) {
        console.log("Fejl - kunne ikke logge ind")
        return Promise.reject(error)
    }
}


//--------------- LOGOUT ------------------------------------------
export const logout = async () => {
    console.log("LOG UD")
    
    try {
        let response = await axios.get(authAPI.baseUrl + "logout")
        return response.data
    } catch (error) {
        console.log("Fejl - Kunne ikke logge ud")
        return Promise.reject(error)
    }
}

// //--------------- LOGGED IN ------------------------------------------
// export const loggedin = async () => {
//     console.log("LOGGED IN")
    
//     try {
//         let response = await axios.get(authAPI.baseUrl + "loggedin")
//         return response.data
//     } catch (error) {
//         console.log("Fejl - Kunne ikke tjekke om brugern er logget ind")
//         return Promise.reject(error)
//     }
// }