import React, { useContext, useState, useEffect } from 'react'
import data from './data'

const templateAdvance = {
    stageOne: {
        advanceName: "",
        advanceDescription: "",
        reasonForAdvance: "",
        firstLine: "",
        secondLine: "",
        postcode: "",
        townOrCity: "",
        country: "",
        monthlyRent: 0,
    },
    stageTwo: {
        leaseAgreement: "",
        rentProtection: "",
        tenantVetting: "",
    },
    stageThree: {
        amountRentSelling: 0,
        advanceDuration: 0,
        monthlyPayment: 0,
        yearlyInterestRate: 0,
    },
    stageFour: {
        bankAccountName: "",
        bankAccountNumber: "",
        bankAccountSortCode: "",
    },
    conf: {
        acceptTerms: false,
    }
}

const sampleUserObject = {
    id: "1",
    title: "Mr",
    firstName: "Test",
    lastName: "User",
    emailAddress: "testing@gmail.com",
    ifVerified: false,
    hasAddressHistory: false,
    contactNumber: 0,
}


const getUserLocalStorage = () => {
    let localUserObject = localStorage.getItem('localUserObject')
    if (localUserObject) {
        return (localUserObject = JSON.parse(localStorage.getItem('localUserObject')))
    } else {
        return sampleUserObject
    }
}

const getAdvanceLocalStorage = () => {
    let localAdvances = localStorage.getItem('localAdvances')
    if (localAdvances) {
        return (localAdvances = JSON.parse(localStorage.getItem('localAdvances')))
    } else {
        return data
    }
}

const getLocalAdvanceStorage = () => {
    let localNewAdvance = localStorage.getItem('localNewAdvance')
    if (localNewAdvance) {
        return (localNewAdvance = JSON.parse(localStorage.getItem('localNewAdvance')))
    } else {
        return templateAdvance
    }
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [loading, setloading] = useState(true)
    const [passwordShow, setPasswordShow] = useState(false)
    const [userAddressHistory, setUserAddressHistory] = useState([])

    const [userProfileTestData, setUserProfileTestData] = useState(getUserLocalStorage())
    const [newAdvance, setNewAdvance] = useState(getLocalAdvanceStorage())
    const [testAdvances, setTestAdvances] = useState(getAdvanceLocalStorage())

    useEffect(() => {
        localStorage.setItem('localUserObject', JSON.stringify(userProfileTestData))
    }, [userProfileTestData])

    useEffect(() => {
        localStorage.setItem('localNewAdvance', JSON.stringify(newAdvance))
    }, [newAdvance])

    useEffect(() => {
        localStorage.setItem('localAdvances', JSON.stringify(testAdvances))
    }, [testAdvances])




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
            newAdvance,
            setNewAdvance,
            templateAdvance,
            testAdvances,
            setTestAdvances,
        }}
    >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }