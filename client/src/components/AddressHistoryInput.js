import React from 'react'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'


const AddressHistoryInput = () => {

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

    const {
        userProfileTestData,
        setUserProfileTestData,
        setUserAddressHistory,
    } = useGlobalContext()

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

        if (duration >= 36) {
            console.log("address hit")
            setUserProfileTestData({ ...userProfileTestData, "hasAddressHistory": true })
            setUserAddressHistory(addressHistory)
        }
    }

    const removeAddress = (index) => {
        let data = [...addressHistory]
        data.splice(index, 1)
        setAddressHistory(data)
    }

    return (
        <div>
            <p>We require at least 3 years of address history for a soft credit check</p>
            <p>{`So far, we have address history for you for ${duration} months`}</p>
            {duration >= 36 && <p>Address history is good</p>
                || <p>Please add more addresses</p>}

            <form className="address-verification-form" onSubmit={submitForm}>
                {addressHistory.map((address, index) => {
                    const { firstLine, secondLine, postcode,
                        townOrCity, country, startDate, endDate } = address
                    let addressDurationHist = 0
                    if (endDate && startDate) {
                        addressDurationHist = calculateMonths(endDate, startDate)
                    }
                    return (
                        <div className="address-verification-form-address" key={index}>
                            <label>First Address Line</label>
                            <input
                                type="text"
                                name="firstLine"
                                value={firstLine}
                                onChange={(e) => handleChange(index, e)}
                            />
                            <label>Second Address Line</label>
                            <input
                                type="text"
                                name="secondLine"
                                value={secondLine}
                                onChange={(e) => handleChange(index, e)}
                            />
                            <label>Post code</label>
                            <input
                                type="text"
                                name="postcode"
                                value={postcode}
                                onChange={(e) => handleChange(index, e)}
                            />
                            <label>Town/City</label>
                            <input
                                type="text"
                                name="townOrCity"
                                value={townOrCity}
                                onChange={(e) => handleChange(index, e)}
                            />
                            <label>Country</label>
                            <input
                                type="text"
                                name="country"
                                value={country}
                                onChange={(e) => handleChange(index, e)}
                            />
                            <label>Start Date</label>
                            <input
                                type="month"
                                name="startDate"
                                value={startDate}
                                onChange={(e) => handleChange(index, e)}
                                required
                            />
                            <label>End Date</label>
                            <input
                                type="month"
                                name="endDate"
                                value={endDate}
                                onChange={(e) => handleChange(index, e)}
                                required
                            />
                            {addressDurationHist ?
                                `You have spent ${addressDurationHist} 
                                    months at this address`
                                : ""}
                            <button className="btn-secondary"
                                onClick={removeAddress}>
                                Remove Address</button>
                        </div>
                    )
                })}
                <div className="two-button-container">
                    <button className="btn-secondary"
                        onClick={addMoreAddressFields}>
                        Add another address
                    </button>

                    <button
                        className="btn-secondary"
                        disabled={duration >= 36 ? false : true}
                        onClick={submitForm}>
                        Submit Address History
                    </button>
                </div>
            </form>

        </div>
    )
}

export default AddressHistoryInput