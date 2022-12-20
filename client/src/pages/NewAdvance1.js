import React from 'react'
import { useGlobalContext } from "../context"
import { useNavigate } from "react-router-dom"

const NewAdvance1 = () => {

    const navigate = useNavigate()
    const { newAdvance, setNewAdvance } = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/new-advance-2")
    }

    const handleChange = () => {

    }

    return (
        <div className="dashboard-div">
            <h4>New Advance - Property Details</h4>
            <form className="dashboard-div">
                <label> Name of Advance
                    <input
                        type="text"
                        name=""
                        value=""
                        onChange={handleChange}
                    />
                </label>
                <label> Description of Advance
                    <input
                        type="text"
                        name=""
                        value=""
                        onChange={handleChange}
                    />
                </label>
                <label> Reason for Advance
                    <input
                        type="text"
                        name=""
                        value=""
                        onChange={handleChange}
                    />
                </label>
                <label> Property Address the Advance is for
                    <input
                        type="text"
                        name=""
                        value=""
                        placeholder="First Line"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name=""
                        value=""
                        placeholder="Second Line"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name=""
                        value=""
                        placeholder="Post code"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name=""
                        value=""
                        placeholder="Town/city"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name=""
                        value=""
                        placeholder="Country"
                        onChange={handleChange}
                    />
                </label>
                <label> Monthly rent for this property
                    <input
                        type="number"
                        name=""
                        value=""
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleSubmit}>Next stage</button>
            </form>
        </div>
    )
}

export default NewAdvance1