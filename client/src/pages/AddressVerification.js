import React from 'react'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'

const AddressVerification = () => {
  const [duration, setDuration] = useState(0)
  const addressTemplate = {
    firstLine: "",
    secondLine: "",
    postcode: "",
    townOrCity: "",
    country: "",
    startDate: "",
    endDate: "",
    addressDuration: 0,
  }
  const { userProfileTestData, setUserProfileTestData } = useGlobalContext()

  const [addressHistory, setAddressHistory] = useState(
    [addressTemplate,]
  )

  const calculateMonths = (endDate, startDate) => {
    if (endDate && startDate) {
      let endAddressYear = parseInt(endDate.split("-")[0])
      // console.log(endAddressYear)
      let endAddressMonth = parseInt(endDate.split("-")[1])
      // console.log(endAddressMonth)
      let startAddressYear = parseInt(startDate.split("-")[0])
      // console.log(startAddressYear)
      let startAddressMonth = parseInt(startDate.split("-")[1])
      // console.log(startAddressMonth)
      let differenceMonths = endAddressMonth - startAddressMonth +
        12 * (endAddressYear - startAddressYear)

      console.log(differenceMonths)

      return differenceMonths
    }

    return 0
  }

  useEffect(() => {
    let addressHistoryDuration = 0
    for (let index = 0; index < addressHistory.length; index++) {
      const singleAddress = addressHistory[index]
      const { endDate, startDate } = singleAddress
      let months = calculateMonths(endDate, startDate)
      addressHistoryDuration += months
    }

    setDuration(addressHistoryDuration)
    if (addressHistoryDuration >= 36) {
      console.log("address hit")
      setUserProfileTestData({ ...userProfileTestData, "hasAddressHistory": true })
    }

  }, [addressHistory])

  const addMoreAddressFields = () => {
    setAddressHistory([...addressHistory, addressTemplate])
  }

  const handleChange = (index, e) => {
    let data = [...addressHistory]
    data[index][e.target.name] = e.target.value
    setAddressHistory(data)
  }

  const submitForm = (e) => {
    e.preventDefault()
    setDuration(0)
    let totalMonths = 0

    for (let index = 0; index < addressHistory.length; index++) {
      const singleAddress = addressHistory[index]
      const { endDate, startDate } = singleAddress
      let months = calculateMonths(endDate, startDate)
      totalMonths += months
    }

    setDuration(totalMonths)

    if (totalMonths >= 36) {
      console.log("address hit")
      setUserProfileTestData({ ...userProfileTestData, "hasAddressHistory": true })
    }
    console.log(addressHistory)
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
            const { firstLine, secondLine, postcode,
              townOrCity, country, startDate, endDate } = address
            let addressDurationHist = 0
            if (endDate && startDate) {
              addressDurationHist = calculateMonths(endDate, startDate)
            }
            return (
              <div key={index}>
                <input
                  type="text"
                  name="firstLine"
                  value={firstLine}
                  placeholder="First Address Line"
                  onChange={(e) => handleChange(index, e)}
                />
                <input
                  type="text"
                  name="secondLine"
                  value={secondLine}
                  placeholder="Second Address Line"
                  onChange={(e) => handleChange(index, e)}
                />
                <input
                  type="text"
                  name="postcode"
                  value={postcode}
                  placeholder="Post code"
                  onChange={(e) => handleChange(index, e)}
                />
                <input
                  type="text"
                  name="townOrCity"
                  value={townOrCity}
                  placeholder="Town/City"
                  onChange={(e) => handleChange(index, e)}
                />
                <input
                  type="text"
                  name="country"
                  value={country}
                  placeholder="Country"
                  onChange={(e) => handleChange(index, e)}
                />
                <label> Start Date
                  <input
                    type="month"
                    name="startDate"
                    value={startDate}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </label>
                <label>End Date
                  <input
                    type="month"
                    name="endDate"
                    value={endDate}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </label>
                {addressDurationHist ?
                  `You have spent ${addressDurationHist} months at this address`
                  : ""}
                <button onClick={removeAddress}>Remove Address</button>
              </div>
            )
          })}
          <button
            disabled={duration >= 36 ? false : true}
            onClick={submitForm}>
            Submit Address History
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddressVerification