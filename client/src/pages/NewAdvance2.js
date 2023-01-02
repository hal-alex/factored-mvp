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
        <div className="generic-container">
            <h2>New Advance - Document Upload</h2>
            <form className="address-verification-form">
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
                <div className="two-button-container">
                    <button className="btn-secondary" onClick={() =>
                        navigate("/new-advance-1")}>
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

export default NewAdvance2