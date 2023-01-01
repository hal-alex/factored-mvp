import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Dashboard = () => {

  const { userProfileTestData, testAdvances } = useGlobalContext()

  const KYC = userProfileTestData.ifVerified
  const phoneNumber = userProfileTestData.contactNumber
  const addressHistoryStatus = userProfileTestData.hasAddressHistory

  const dashboardHeadings = ["Name", "Address",
    "Total rent sold", "Advance duration (months)", "Monthly payment"]

  return (
    <div className="dashboard-main-container">
      <div className="dashboard-div">
        <h3>Your dashboard</h3>
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
        <h4>Your advances</h4>
        <table className="dashboard-table">
          <div className="table-headings-container">
            {dashboardHeadings.map((heading, index) => {
              return <th key={index}>{heading}</th>
            })}
          </div>
          <div >
            {testAdvances.map(advance => {
              const {
                id,
                advanceName,
                advanceDescription,
                reasonForAdvance,
                firstLine,
                secondLine,
                postcode,
                townOrCity,
                country,
                monthlyRent,
                amountRentSelling,
                advanceDuration,
                monthlyPayment,
              } = advance
              return (
                <tr key={id} className="table-values">
                  <td><Link to={`/advances/${id}`}>{advanceName}</Link></td>
                  <td>{`${firstLine}, ${secondLine}, ${postcode}, ${townOrCity}`}</td>
                  <td>£{amountRentSelling}</td>
                  <td>{advanceDuration}</td>
                  <td>£{monthlyPayment}</td>
                </tr>
              )
            })}
          </div>
        </table>
      </div>
    </div>
  )
}

export default Dashboard