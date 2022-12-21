import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../data"
import { Link } from 'react-router-dom'

const IndividualAdvance = () => {

    const { advanceID } = useParams()
    const selectedAdvance = data.find((item) => item.id == advanceID)
    const { id, title, advance_status, amount_borrowed,
        start_date, end_date, property_address, description } = selectedAdvance

    return (
        <div>
            <h3>Individual Advance</h3>
            <h4>{title}</h4>
            <p>Description: {description}</p>
            <p>Status: {advance_status}</p>
            <p>Initial amount: £{amount_borrowed}</p>
            <p>Start data: {start_date}</p>
            <p>End date: {end_date}</p>
            <Link to="/new-advance-1"><button>Create new Advance</button></Link>
            <Link to="/dashboard"><button>Back to dashboard</button></Link>
        </div>
    )
}

export default IndividualAdvance