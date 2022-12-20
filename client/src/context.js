import React, { useContext, useState, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [loading, setloading] = useState(true)
    const [passwordShow, setPasswordShow] = useState(false)

    const [userProfileTestData, setUserProfileTestData] = useState({
        id: "1",
        title: "Mr",
        firstName: "Alex",
        lastName: "Ha",
        emailAddress: "testing@gmail.com",
        ifVerified: false,
        hasAddressHistory: false,
        contactNumber: "",
    })

    const [userAddressHistory, setUserAddressHistory] = useState([])

    return <AppContext.Provider
        value={{
            loading,
            setloading,
            passwordShow,
            setPasswordShow,
            userProfileTestData,
            setUserProfileTestData,
            userAddressHistory,
            setUserAddressHistory,
        }}
    >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }