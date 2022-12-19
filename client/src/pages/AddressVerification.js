import React from 'react'
import { useState, useEffect } from 'react'

const AddressVerification = () => {

  const [duration, setDuration] = useState(0)
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
    if (addressHistory.endDate && addressHistory.startDate) {
      let endAddressYear = parseInt(addressHistory.endDate.split("-")[0])
      let endAddressMonth = parseInt(addressHistory.endDate.split("-")[1])
      let startAddressYear = parseInt(addressHistory.startDate.split("-")[0])
      let startAddressMonth = parseInt(addressHistory.startDate.split("-")[1])
      let differenceMonths = endAddressMonth - startAddressMonth +
        12 * (endAddressYear - startAddressYear)
      setDuration(differenceMonths)
    }
  }, [addressHistory])


  const handleChange = (e) => {
    setAddressHistory({ ...addressHistory, [e.target.name]: e.target.value })
  }


  return (
    <div className="dashboard-div">
      <h3>Address Verification</h3>
      <p>We require at least 3 years of address history for a soft credit check</p>
      <p>So far, we have address history for you for {duration} months</p>
      {duration >= 36 && <p>Address history is good</p>
        || <p>Please add more addresses</p>}
      <button onClick={() => setAddressCount(addressCount + 1)}>Add another address</button>
      <div>
        <form className="form-container">
          <label> First Line Address
            <input
              name='firstLine'
              placeholder='Name'
              onChange={handleChange}
              required
            />
          </label>
          <label> Second Line Address
            <input
              name='secondLine'
              placeholder='Name'
              onChange={handleChange}
              required
            />
          </label>
          <label> Postcode
            <input
              name='postcode'
              placeholder='Name'
              onChange={handleChange}
              required
            />
          </label>
          <label> City / Town
            <input
              name='townOrCity'
              placeholder='Name'
              onChange={handleChange}
              required
            />
          </label>
          <label> Country
            <input
              name='country'
              placeholder='Name'
              onChange={handleChange}
              required
            />
          </label>
          <label> Start Date
            <input
              type="month"
              name="startDate"
              onChange={handleChange}
              required
            />
          </label>
          <label>End Date
            <input
              type="month"
              name="endDate"
              onChange={handleChange}
              required
            />
          </label>
          {duration ? <p>You have spent {duration} months at this address</p> : ""}
          <button>Confirm address</button>
        </form>
      </div>
    </div>
  )
}

export default AddressVerification