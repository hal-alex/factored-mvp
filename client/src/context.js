import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {



    const [loading, setloading] = useState(true)
    const [passwordShow, setPasswordShow] = useState(false)

    const getLocalToken = () => {
        console.log("getLocalToken hit")
        return window.localStorage.getItem("factored_token")
    }

    useEffect(() => {
        const token = getLocalToken()
        if (token) {
            axios.defaults.headers.common["Authorization"] 
                = `Token ${token}`
        }
    }, [])
    
    return <AppContext.Provider
        value={{
            loading,
            setloading,
            passwordShow,
            setPasswordShow,

        }}
    >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }