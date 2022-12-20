import React from 'react'
import { useGlobalContext } from "../context"
import { useNavigate } from "react-router-dom"

const NewAdvance2 = () => {

    const navigate = useNavigate()
    const { newAdvance, setNewAdvance } = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/new-advance-3")
    }

    const handleChange = () => {

    }

    return (
        <div className="dashboard-div">
            <h4>New Advance - Document Upload</h4>
            <form className="dashboard-div">
                <label>
                    Upload your lease agreement (required)
                    <input type="file" name="" id="" />
                </label>
                <label>
                    Upload your rent protection policy (optional)
                    <input type="file" name="" id="" />
                </label>
                <label>
                    Upload tenant vetting document (optional)
                    <input type="file" name="" id="" />
                </label>
                <button onClick={handleSubmit}>Next stage</button>
            </form>
        </div>
    )
}

export default NewAdvance2