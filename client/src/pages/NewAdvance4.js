import React from 'react'
import { useGlobalContext } from "../context"
import { useNavigate } from "react-router-dom"

const NewAdvance4 = () => {

    const navigate = useNavigate()
    const { newAdvance, setNewAdvance } = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/new-advance-confirmation")
    }

    const handleChange = () => {

    }

    return (
        <div className="dashboard-div">
            <h4>New Advance - Your Bank Details</h4>
            <form className="dashboard-div">
                <label>
                    Name on your bank account
                    <input type="text" name="" id="" />
                </label>
                <label>
                    Bank account number
                    <input type="number" name="" id="" />
                </label>
                <label>
                    Bank account sort code
                    <input type="number" name="" id="" />
                </label>
                <button onClick={handleSubmit}>Next stage</button>
            </form>
        </div>
    )
}

export default NewAdvance4