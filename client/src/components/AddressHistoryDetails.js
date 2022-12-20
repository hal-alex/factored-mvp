import React from 'react'
import { useGlobalContext } from '../context'

const AddressHistoryDetails = () => {

    const { userAddressHistory } = useGlobalContext()

    return (
        <div>
            <h4>Address History</h4>
            {userAddressHistory.map((address, index) => {
                const { firstLine, secondLine, postcode,
                    townOrCity, country, startDate, endDate } = address
                return (
                    <div>
                        <h5>Address in {postcode}</h5>
                        <p>First line: {firstLine}</p>
                        <p>Second line: {secondLine}</p>
                        <p>Post code: {postcode}</p>
                        <p>Town/city: {townOrCity}</p>
                        <p>Country: {country}</p>
                        <p>Start date: {startDate}</p>
                        <p>End date: {endDate}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default AddressHistoryDetails