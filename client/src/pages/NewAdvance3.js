import React from 'react'
import { useGlobalContext } from "../context"
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'

const NewAdvance3 = () => {

    const navigate = useNavigate()
    const { newAdvance, setNewAdvance } = useGlobalContext()
    const rates = [[12, 24.99], [24, 21.99],
    [36, 18.99], [48, 15.99], [60, 12.99]]

    const { stageOne: { monthlyRent },
        stageThree: { amountRentSelling,
            advanceDuration,
            monthlyPayment,
            yearlyInterestRate,
        } } = newAdvance

    useEffect(() => {

        const calculateMonthlyPayment = () => {
            // Calculating the monthly payment for an Advance
            // A = P (r (1+r)^n) / ( (1+r)^n -1 )
            // A = Payment amount per period
            // P = Initial principal or loan amount
            // r = Interest rate per month
            // n = Total number of payments or months
            // let A = 0
            // const P = amountRentSelling
            // const r = rates[4][1] / 12
            // const n = rates[4][0]
            // A = P * (r * (1 + r) ^ n) / ((1 + r) ^ n - 1)
            // console.log(A)
            console.log(advanceDuration)
            for (let index = 0; index < rates.length; index++) {
                const term = rates[index][0]
                const rate = rates[index][1]
                const principal = amountRentSelling
                const interestRateMonthly = rate / 100 / 12
                const totalNumberOfPayments = advanceDuration
                const x = Math.pow(1 + interestRateMonthly, totalNumberOfPayments)
                const monthlyPayment = ((principal * x * interestRateMonthly)
                    / (x - 1)).toFixed(2)

                if (term == advanceDuration) {
                    console.log(rate)
                    console.log(rates[index])
                    setNewAdvance({
                        ...newAdvance,
                        stageThree: {
                            ...newAdvance.stageThree,
                            yearlyInterestRate: rate,
                            monthlyPayment: monthlyPayment,
                        }
                    })
                }
            }
        }

        if (newAdvance.stageOne.monthlyRent &&
            newAdvance.stageThree.amountRentSelling &&
            newAdvance.stageThree.advanceDuration) {
            calculateMonthlyPayment()
        }

    }, [newAdvance.stageOne.monthlyRent,
    newAdvance.stageThree.amountRentSelling,
    newAdvance.stageThree.advanceDuration])


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
                    Amount of annual rent you're selling in £
                    <input
                        type="number"
                        name="amountRentSelling"
                        value={amountRentSelling}
                        onChange={handleChange}
                    />
                </label>
                <p>Your min Advance amount is £3000 </p>
                <p>Your max Advance amount is £{monthlyRent * 12}</p>
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
                    <p>Your monthly payments will be: £{monthlyPayment}</p>
                    <p>Your APR is {yearlyInterestRate}%</p>
                </label>
                <button onClick={handleSubmit}>Next stage</button>
                <button onClick={() =>
                    navigate("/new-advance-2")}>Previous stage</button>
            </form>
        </div>
    )
}

export default NewAdvance3