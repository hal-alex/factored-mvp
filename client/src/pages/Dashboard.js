import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Dashboard = () => {

  const { userProfileTestData, testAdvances } = useGlobalContext()

  const KYC = userProfileTestData.ifVerified
  const phoneNumber = userProfileTestData.contactNumber
  const addressHistoryStatus = userProfileTestData.hasAddressHistory

  const dashboardHeadings = [
    "Advance ID",
    "Property Address",
    "Total Advance Amount (£)",
    "Total term (m)",
    "Remaining Advance Balance (£)",
    "Remaining term (m)",
    "Monthly payment amount (£)",
    "Fee (%)",
    "Next Payment date",
  ]

  return (
    <div className="dashboard-main-container">
      <div className="dashboard-div">
        <h2>Your dashboard</h2>
        <div>
          <h4>Complete these steps to create your first advance</h4>
          <div>
            <p>1. Go through identity verification.</p>
            {KYC && <p>Completed</p>}
            <Link to="/identityverification">
              <button className="btn-secondary"
                disabled={KYC ? true : false}>
                Start Identity Verification</button>
            </Link>
          </div>
          <p>2. Add your address history for the last 3 years</p>
          <p>{addressHistoryStatus ? "Completed" : ""}</p>
          <Link to="/addresshistory">
            <button className="btn-secondary"
              disabled={addressHistoryStatus ? true : false}>Add Address History</button>
          </Link>
          <div>
            <p>3. Add your contact number</p>
            <p>{phoneNumber ? "Completed" : ""}</p>
            <Link to="/profile">
              <button className="btn-secondary"
                disabled={phoneNumber ? true : false}>Add Contact Number</button>
            </Link>
          </div>
        </div>
        <div className='create-advance-button'>
          <Link to="/new-advance-1">
            <button className="btn-primary" disabled={KYC && addressHistoryStatus
              && phoneNumber ? false : true}>Create Advance</button>
          </Link>
        </div>
      </div>
      <div className="table-container">
        <h2>Your advances</h2>
        <div className="dashboard-table">
          <div className="table-headings-values">

            {dashboardHeadings.map((heading, index) => {
              return <div className="table-heading" key={index}>{heading}</div>
            })}

            {/* {testAdvances.map(advance => {
              const {
                id,
                firstLine,
                secondLine,
                postcode,
                townOrCity,
                amountRentSelling,
                advanceDuration,
                monthlyPayment,
                fee,
                nextPaymentDate,
              } = advance
              return (
                <>
                  <div><Link to={`/advances/${id}`}>{id}</Link></div>
                  <div className="table-value-address">{`${firstLine}, 
                  ${secondLine}, ${postcode}, ${townOrCity}`}</div>
                  <div>{`£${amountRentSelling}`}</div>
                  <div>{`${advanceDuration} months`}</div>
                  <div>{`£${amountRentSelling}`}</div>
                  <div>{`${advanceDuration} months`}</div>
                  <div>{`£${monthlyPayment}`}</div>
                  <div>{fee}</div>
                  <div>{nextPaymentDate}</div>
                </>
              )
            })} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard