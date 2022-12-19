import React from 'react'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'

const AddressVerification = () => {

  const { userProfileTestData, setUserProfileTestData } = useGlobalContext()
  const [duration, setDuration] = useState(0)
  const [addressHistory, setAddressHistory] = useState([
    {
      firstLine: "",
      secondLine: "",
      postcode: "",
      townOrCity: "",
      country: "",
      startDate: "",
      endDate: "",
    },
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
    if (duration >= 36) {
      console.log("address hit")
      setUserProfileTestData({ ...userProfileTestData, "hasAddressHistory": true })
    }
  }, [addressHistory])

  const addMoreAddressFields = () => {
    let newAddress = {
      firstLine: "",
      secondLine: "",
      postcode: "",
      townOrCity: "",
      country: "",
      startDate: "",
      endDate: "",
    }
    setAddressHistory([...addressHistory, newAddress])
  }

  const handleChange = (index, e) => {
    let data = [...addressHistory]
    data[index][e.target.name] = e.target.value
    setAddressHistory(data)
  }

  const submitForm = (e) => {
    e.preventDefault()

  }

  const removeAddress = (index) => {
    let data = [...addressHistory]
    data.splice(index, 1)
    setAddressHistory(data)
  }

  return (
    <div className="dashboard-div">
      <h3>Address Verification</h3>
      <p>We require at least 3 years of address history for a soft credit check</p>
      <p>So far, we have address history for you for {duration} months</p>
      {duration >= 36 && <p>Address history is good</p>
        || <p>Please add more addresses</p>}
      <button onClick={addMoreAddressFields}>Add another address</button>
      <div>
        <form className="form-container" onSubmit={submitForm}>
          {addressHistory.map((address, index) => {
            const { firstLine, startDate, endDate } = address
            return (
              <div key={index}>
                <input
                  type="text"
                  name="firstLine"
                  value={firstLine}
                  placeholder="First Address Line"
                  onChange={(e) => handleChange(index, e)}
                />
                <button onClick={removeAddress}>Remove Address</button>
              </div>
            )
          })}
          <button onClick={submitForm}>Submit Address History</button>
        </form>
        {/* <form className="form-container">
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
        </form> */}
      </div>
    </div>
  )
}

export default AddressVerification