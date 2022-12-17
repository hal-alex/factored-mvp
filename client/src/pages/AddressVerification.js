import React from 'react'
import { useState, useEffect } from 'react'

const AddressVerification = () => {

  const [addressCount, setAddressCount] = useState(1)

  const addressFields = {
    firstLine: "",
    secondLine: "",
    postcode: "",
    townOrCity: "",
    country: "",
    startDate: "",
    endDate: ""
  }

  const [addressHistory, setAddressHistory] = useState([
    addressFields
  ])

  useEffect(() => {
    console.log()
  }, [])


  return (
    <div className="dashboard-div">
      <h3>Address Verification</h3>
      <p>We require at least 3 years of address history for a soft credit check</p>
      <button onClick={() => setAddressCount(addressCount + 1)}>Add another address</button>
      <div>

      </div>
    </div>
  )
}

export default AddressVerification