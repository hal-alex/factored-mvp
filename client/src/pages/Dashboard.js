import React from 'react'
import { Link } from 'react-router-dom'
import data from "../data"

const Dashboard = () => {

  const dashboardHeadings = ["Name", "Address", "Start Date",
    "End Date", "Advance Amount", "Status", "Last Payment"]

  return (
    <div className="dashboard-div">
      <h3>Your dashboard</h3>
      <div>
        <h4>Complete these steps to create your first advance</h4>
        <div>
          <p>1. Go through identity verification.</p>
          <Link to="/identityverification">
            <button>Start Identity Verification</button>
          </Link>
        </div>
        <p>2. Add your address history for the last 3 years</p>
        <Link to="/addresshistory">
          <button>Add Address History</button>
        </Link>
        <div>
          <p>3. Add your contact number</p>
          <Link to="/profile">
            <button>Add Contact Number</button>
          </Link>
        </div>
      </div>
      <div className='create-advance-button'>
        <Link to="/createadvance">
          <button>Create Advance</button>
        </Link>
      </div>
      <div>
        <h4>Your advances</h4>
        <table >
          <div>
            {dashboardHeadings.map((heading, index) => {
              return <th key={index}>{heading}</th>
            })}
          </div>


          <div>
            {data.map(advance => {
              const { id, title, advance_status, amount_borrowed,
                start_date, end_date, property_address } = advance
              return (
                <tr key={id}>
                  <td><Link to={`/advances/${id}`}>{title}</Link></td>
                  <td>{ }</td>
                  <td>{start_date}</td>
                  <td>{end_date}</td>
                  <td>£{amount_borrowed}</td>
                  <td>{advance_status}</td>
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