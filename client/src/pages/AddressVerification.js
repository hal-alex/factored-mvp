import React from 'react'
import { useState, useEffect } from 'react'

const AddressVerification = () => {

  const [duration, setDuration] = useState("")
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

  const handleChange = (e) => {
    // let startingDate = new Date(addressHistory.startDate)
    // let calculation = addressHistory.startDate.getMonth()
    //   - addressHistory.endDate.getMonth() + 12 *
    //   (addressHistory.startDate.getYear() - addressHistory.endDate.getYear())
    // console.log(startingDate)
    console.log(addressHistory.endDate - addressHistory.startDate)
    // if (addressHistory.startDate && addressHistory.endDate) {

    // }
    console.log(e.target.value)
  }


  return (
    <div className="dashboard-div">
      <h3>Address Verification</h3>
      <p>We require at least 3 years of address history for a soft credit check</p>
      <button onClick={() => setAddressCount(addressCount + 1)}>Add another address</button>
      <div>
        <form className="form-container">
          <label> First Line Address
            <input
              name='firstLine'
              placeholder='Name'
              onChange={handleChange}
            />
          </label>
          <label> Second Line Address
            <input
              name='secondLine'
              placeholder='Name'
              onChange={handleChange}
            />
          </label>
          <label> Postcode
            <input
              name='postcode'
              placeholder='Name'
              onChange={handleChange}
            />
          </label>
          <label> City / Town
            <input
              name='townOrCity'
              placeholder='Name'
              onChange={handleChange}
            />
          </label>
          <label> Country
            <input
              name='country'
              placeholder='Name'
              onChange={handleChange}
            />
          </label>
          <label> Start Date
            <input type="date" name="startDate" onChange={handleChange} />
          </label>
          <label>End Date
            <input type="date" name="endDate" onChange={handleChange} />
          </label>
          {duration}
          <button>Confirm address</button>
        </form>
      </div>
    </div>
  )
}

export default AddressVerification