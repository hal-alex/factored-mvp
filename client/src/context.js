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
        ifVerified: true,
        hasAddressHistory: true,
        contactNumber: 111,
    })

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

    const [userAddressHistory, setUserAddressHistory] = useState([])

    const [newAdvance, setNewAdvance] = useState(templateAdvance)

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
        }}
    >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }