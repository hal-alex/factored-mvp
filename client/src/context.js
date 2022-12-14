import React, { useContext, useState, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [loading, setloading] = useState(true)

  return <AppContext.Provider
    value={{
        loading,
        setloading,
    }}
    >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }