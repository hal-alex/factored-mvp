import React from 'react'
import { useGlobalContext } from '../context'
import { useNavigate } from "react-router-dom"

const AddressHistoryDetails = () => {

    const navigate = useNavigate()

    const { userAddressHistory } = useGlobalContext()

    return (
        <div>
            {userAddressHistory.map((address, index) => {
                const { firstLine, secondLine, postcode,
                    townOrCity, country, startDate, endDate } = address
                return (
                    <div key={index}>
                        <h4>Address in {postcode}</h4>
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
            <button className="btn-secondary"
                onClick={() => navigate("/dashboard")}>
                Back to dashboard
            </button>
        </div>
    )
}
export default AddressHistoryDetails