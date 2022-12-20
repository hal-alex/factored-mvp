import React from 'react'
import { useGlobalContext } from "../context"
import { useNavigate } from "react-router-dom"

const NewAdvance3 = () => {

    const navigate = useNavigate()
    const { newAdvance, setNewAdvance } = useGlobalContext()
    const rates = [[12, 0.2499], [24, 0.2199],
    [36, 0.1899], [48, 0.1599], [60, 0.1299]]

    const { stageOne: { monthlyRent },
        stageThree: { amountRentSelling,
            advanceDuration,
        } } = newAdvance

    const calculateMonthlyPayment = () => {
        const durationMonths = rates[4][0]
        const interestRate = rates[4][1]
        const totalNumOfPayments = durationMonths * 12
        const monthlyInterestRate = interestRate / 12
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/new-advance-4")
    }

    const handleChange = (e) => {
        setNewAdvance({
            ...newAdvance,
            stageThree: {
                ...newAdvance.stageThree,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className="dashboard-div">
            <h4>New Advance - Rent & Advance Details</h4>
            <form className="dashboard-div">
                <label>
                    Amount of rent you're selling in £
                    <input
                        type="number"
                        name="amountRentSelling"
                        value={amountRentSelling}
                        onChange={handleChange}
                    />
                </label>
                <p>Min Advance amount is £3000 </p>
                <p>Max Advance amount is £{monthlyRent * 12}</p>
                <label>
                    Duration of Advance in months
                    <input
                        type="number"
                        name="advanceDuration"
                        value={advanceDuration}
                        onChange={handleChange}
                        placeholder="60"
                    />
                </label>
                <p>Between 12 months and 60 months</p>
                <label>
                    <p>Your monthly payments will be: £</p>
                </label>
                <button onClick={handleSubmit}>Next stage</button>
                <button onClick={() =>
                    navigate("/new-advance-2")}>Previous stage</button>
            </form>
        </div>
    )
}

export default NewAdvance3