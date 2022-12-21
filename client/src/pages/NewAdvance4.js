import React from 'react'
import { useGlobalContext } from "../context"
import { useNavigate } from "react-router-dom"

const NewAdvance4 = () => {

    const navigate = useNavigate()
    const { newAdvance, setNewAdvance } = useGlobalContext()
    const { bankAccountName,
        bankAccountNumber,
        bankAccountSortCode } = newAdvance

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/new-advance-confirmation")
    }

    const handleChange = (e) => {
        setNewAdvance({
            ...newAdvance,
            stageFour: {
                ...newAdvance.stageFour,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className="dashboard-div">
            <h4>New Advance - Your Bank Details</h4>
            <form className="dashboard-div">
                <label>
                    Name on your bank account
                    <input
                        type="text"
                        name="bankAccountName"
                        value={bankAccountName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Bank account number
                    <input
                        type="number"
                        name="bankAccountName"
                        value={bankAccountNumber}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Bank account sort code
                    <input
                        type="number"
                        name="bankAccountSortCode"
                        value={bankAccountSortCode}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleSubmit}>Next stage</button>
                <button onClick={() =>
                    navigate("/new-advance-3")}>Previous stage</button>
            </form>
        </div>
    )
}

export default NewAdvance4