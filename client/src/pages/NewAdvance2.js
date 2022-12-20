import React from 'react'
import { useGlobalContext } from "../context"
import { useNavigate } from "react-router-dom"

const NewAdvance2 = () => {

    const navigate = useNavigate()
    const { newAdvance, setNewAdvance } = useGlobalContext()
    const { stageTwo: {
        leaseAgreement,
        rentProtection,
        tenantVetting,
    } } = newAdvance

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/new-advance-3")
    }

    const handleChange = (e) => {
        // console.log(e.target.files[0])
        // setFile(e.target.files[0])
        setNewAdvance({
            ...newAdvance,
            stageTwo: {
                ...newAdvance.stageTwo,
                [e.target.name]: e.target.files[0]
            }
        })
    }

    return (
        <div className="dashboard-div">
            <h4>New Advance - Document Upload</h4>
            <form className="dashboard-div">
                <label>
                    Upload your lease agreement (required)
                    <input
                        type="file"
                        name="leaseAgreement"
                        // value={leaseAgreement}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Upload your rent protection policy (optional)
                    <input
                        type="file"
                        name="rentProtection"
                        // value={rentProtection}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Upload tenant vetting document (optional)
                    <input
                        type="file"
                        name="tenantVetting"
                        // value={tenantVetting}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleSubmit}>Next stage</button>
                <button onClick={() =>
                    navigate("/new-advance-1")}>Previous stage</button>
            </form>
        </div>
    )
}

export default NewAdvance2