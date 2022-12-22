import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'


const IndividualAdvance = () => {

    const { advanceID } = useParams()
    const { testAdvances } = useGlobalContext()

    const selectedAdvance = testAdvances.find((item) => item.id == advanceID)

    const {
        advanceName,
        advanceDescription,
        reasonForAdvance,
        firstLine,
        secondLine,
        postcode,
        townOrCity,
        monthlyRent,
        amountRentSelling,
        advanceDuration,
        monthlyPayment,
        yearlyInterestRate,
        leaseAgreement,
        rentProtection,
        tenantVetting,
        bankAccountName,
        bankAccountNumber,
        bankAccountSortCode,
    } = selectedAdvance

    return (
        <div>
            <h3>Individual Advance</h3>
            <h4>{advanceName}</h4>
            <p>Reason for advance: {reasonForAdvance}</p>
            <p>Description: {advanceDescription}</p>
            <p>Address: {`${firstLine}, ${secondLine}, ${postcode}, ${townOrCity}`}</p>
            <p>Monthly rent: £{monthlyRent}</p>
            <p>Amount of rent sold: £{amountRentSelling}</p>
            <p>Duration: {advanceDuration} months</p>
            <p>Advance monthly payments: £{monthlyPayment}</p>
            <p>Yearly interest rate: {yearlyInterestRate}%</p>
            <p>Lease agreement: {leaseAgreement?.name}</p>
            <p>Rent protection: {rentProtection?.name}</p>
            <p>Tenant vetting: {tenantVetting?.name}</p>
            <p>Name on bank account: {bankAccountName}</p>
            <p>Your bank account number: {bankAccountNumber}</p>
            <p>Your bank account sort code: {bankAccountSortCode}</p>
            <Link to="/new-advance-1"><button>Create new Advance</button></Link>
            <Link to="/dashboard"><button>Back to dashboard</button></Link>
        </div>
    )
}

export default IndividualAdvance