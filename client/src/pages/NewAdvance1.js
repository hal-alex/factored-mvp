import React from 'react'
import { useState, useEffect } from 'react'
import { useGlobalContext } from "../context"
import { useNavigate } from "react-router-dom"

const NewAdvance1 = () => {

    const navigate = useNavigate()

    const [errorText, setErrorText] = useState("")

    const { newAdvance, setNewAdvance } = useGlobalContext()

    const { stageOne: {
        advanceName,
        advanceDescription,
        reasonForAdvance,
        firstLine,
        secondLine,
        postcode,
        townOrCity,
        country,
        monthlyRent, } } = newAdvance

    const handleSubmit = (e) => {
        e.preventDefault()
        const keys = Object.keys(newAdvance.stageOne)
        keys.forEach((key, index) => {
            if (key == "secondLine") {
                return
            }
            else if (!newAdvance.stageOne[key]) {
                setErrorText("Please fill out required fields")
            } else {
                setErrorText("")
            }
            console.log(`${key}: ${newAdvance.stageOne[key]}`)
        })
        navigate("/new-advance-2")
    }

    const handleChange = (e) => {
        setNewAdvance({
            ...newAdvance,
            stageOne: {
                ...newAdvance.stageOne,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className="dashboard-div">
            <h4>New Advance - Property Details</h4>
            <form className="dashboard-div">
                <label> Name of Advance
                    <input
                        type="text"
                        name="advanceName"
                        value={advanceName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label> Description of Advance
                    <input
                        type="text"
                        name="advanceDescription"
                        value={advanceDescription}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label> Reason for Advance
                    <input
                        type="text"
                        name="reasonForAdvance"
                        value={reasonForAdvance}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label> Property Address the Advance is for
                    <input
                        type="text"
                        name="firstLine"
                        value={firstLine}
                        placeholder="First Line"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="secondLine"
                        value={secondLine}
                        placeholder="Second Line"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="postcode"
                        value={postcode}
                        placeholder="Post code"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="townOrCity"
                        value={townOrCity}
                        placeholder="Town/city"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="country"
                        value={country}
                        placeholder="Country"
                        onChange={handleChange}
                        required
                    />
                </label>
                <label> Monthly rent for this property
                    <input
                        type="number"
                        name="monthlyRent"
                        value={monthlyRent}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button onClick={handleSubmit}>Next stage</button>
                <p>{errorText && "All fields are required"}</p>
            </form>
        </div>
    )
}

export default NewAdvance1