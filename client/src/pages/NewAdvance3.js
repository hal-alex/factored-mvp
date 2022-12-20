import React from 'react'
import { useGlobalContext } from "../context"
import { useNavigate } from "react-router-dom"

const NewAdvance3 = () => {

    const navigate = useNavigate()
    const { newAdvance, setNewAdvance } = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/new-advance-4")
    }

    const handleChange = () => {

    }

    return (
        <div className="dashboard-div">
            <h4>New Advance - Rent & Advance Details</h4>
            <form className="dashboard-div">
                <label>
                    Amount of rent you're selling in £
                    <input type="number" name="" id="" />
                </label>
                <label>
                    Duration of Advance in months
                    <input type="number" name="" id="" />
                </label>
                <label>
                    <p>Your monthly payments will be: £</p>
                </label>
                <button onClick={handleSubmit}>Next stage</button>
            </form>
        </div>
    )
}

export default NewAdvance3