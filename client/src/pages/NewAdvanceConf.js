import React from 'react'
import { useGlobalContext } from "../context"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

const NewAdvanceConf = () => {

    const navigate = useNavigate()
    const [errorText, setErrorText] = useState("")
    const { newAdvance:
        { stageOne, stageTwo,
            stageThree, stageFour, conf },
        setNewAdvance, templateAdvance, setTestAdvances, testAdvances } = useGlobalContext()

    const { advanceName,
        advanceDescription,
        reasonForAdvance,
        firstLine,
        secondLine,
        postcode,
        townOrCity,
        country,
        monthlyRent, } = stageOne

    const {
        leaseAgreement,
        rentProtection,
        tenantVetting,
    } = stageTwo

    const { amountRentSelling,
        advanceDuration,
        monthlyPayment,
        yearlyInterestRate,
    } = stageThree

    const { bankAccountName,
        bankAccountNumber,
        bankAccountSortCode } = stageFour

    const { acceptTerms } = conf

    const handleTickbox = () => {
        setNewAdvance((oldValue) => {
            return {
                ...oldValue,
                conf: {
                    acceptTerms: !acceptTerms
                }
            }
        })
        setErrorText("")
    }

    const handleSubmit = () => {
        if (!acceptTerms) {
            setErrorText("You must accept terms before creating this Advance")
        } else {
            console.log(testAdvances.length + 1)
            const generateID = testAdvances.length + 1
            console.log("make request to backend")
            setTestAdvances((oldValue) => [...oldValue,
            {
                id: generateID,
                advanceName: advanceName,
                advanceDescription: advanceDescription,
                reasonForAdvance: reasonForAdvance,
                firstLine: firstLine,
                secondLine: secondLine,
                postcode: postcode,
                townOrCity: townOrCity,
                country: country,
                monthlyRent: monthlyRent,
                leaseAgreement: leaseAgreement.name,
                rentProtection: rentProtection.name,
                tenantVetting: tenantVetting.name,
                amountRentSelling: amountRentSelling,
                advanceDuration: advanceDuration,
                monthlyPayment: monthlyPayment,
                yearlyInterestRate: yearlyInterestRate,
                bankAccountName: bankAccountName,
                bankAccountNumber: bankAccountNumber,
                bankAccountSortCode: bankAccountSortCode,
                acceptTerms: false,
            }])
            setNewAdvance(templateAdvance)
            navigate("/new-advance-success")
        }
    }

    return (
        <div className="generic-container">
            <h2>New Advance Confirmation</h2>
            <div>
                <div>
                    <h4>Property & Rent Details</h4>
                    <p>Advance name: {advanceName}</p>
                    <p>Advance description: {advanceDescription}</p>
                    <p>Reason for advance: {reasonForAdvance}</p>
                    <p>Property address: {firstLine}, {secondLine},
                        {postcode}, {townOrCity}, {country}</p>
                    <p>Monthly rent for this property: £{monthlyRent}</p>
                    <button className="btn-secondary" onClick={() =>
                        navigate("/new-advance-1")}>Edit these details</button>
                </div>
                <div>
                    <h4>Documents</h4>
                    <p>Lease agreement: {leaseAgreement.name}</p>
                    <p>Rent protection: {rentProtection.name}</p>
                    <p>Tenant vetting: {tenantVetting.name}</p>
                    <button className="btn-secondary" onClick={() =>
                        navigate("/new-advance-2")}>Edit these details</button>
                </div>
                <div>
                    <h4>Advance Amount Details</h4>
                    <p>Amount of annual rent you are selling: £{amountRentSelling}</p>
                    <p>Advance duration in months: {advanceDuration}</p>
                    <p>Monthly payments to cover this Advance: £{monthlyPayment}</p>
                    <p>Your APR for this Advance: {yearlyInterestRate}%</p>
                    <button className="btn-secondary" onClick={() =>
                        navigate("/new-advance-3")}>Edit these details</button>
                </div>
                <div>
                    <h4>Your bank details</h4>
                    <p>Name on bank account: {bankAccountName}</p>
                    <p>Your bank account number: {bankAccountNumber}</p>
                    <p>Your bank account sort code: {bankAccountSortCode}</p>
                    <button className="btn-secondary" onClick={() =>
                        navigate("/new-advance-4")}>Edit these details</button>
                </div>
            </div>
            <div className="new-advance-conf-tickbox">
                <label className="new-advance-conf-tickbox">
                    <input type="checkbox" onClick={() => handleTickbox()} />
                    I accept Factored's Terms & Conditions for this Advance
                </label>
            </div>
            <p>{errorText}</p>
            <div className="full-container-width-button">
                <button className="btn-primary" onClick={() =>
                    handleSubmit()}>Submit New Advance</button>
            </div>

        </div>
    )
}

export default NewAdvanceConf