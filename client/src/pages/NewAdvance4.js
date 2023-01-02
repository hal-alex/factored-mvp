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
        <div className="generic-container">
            <h2>New Advance - Your Bank Details</h2>
            <form className="address-verification-form">
                <label>Name on your bank account</label>
                <input
                    type="text"
                    name="bankAccountName"
                    value={bankAccountName}
                    onChange={handleChange}
                />
                <label>Bank account number</label>
                <input
                    type="number"
                    name="bankAccountName"
                    value={bankAccountNumber}
                    onChange={handleChange}
                />
                <label>Bank account sort code</label>
                <input
                    type="number"
                    name="bankAccountSortCode"
                    value={bankAccountSortCode}
                    onChange={handleChange}
                />
                <div className="two-button-container">
                    <button className="btn-secondary" onClick={() =>
                        navigate("/new-advance-3")}>
                        {`< Previous stage`}
                    </button>
                    <button
                        className="btn-secondary"
                        onClick={handleSubmit}>
                        {`Next stage >`}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewAdvance4