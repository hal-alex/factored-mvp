import React from 'react'
import { useNavigate } from "react-router-dom"

const AdvanceCreateSuccess = () => {

    const navigate = useNavigate()

    return (
        <div className="generic-container">
            <h3>Thank you for creating this Advance!</h3>
            <p>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Neque quas iusto et
                sint ipsa ex cumque, ipsam unde exercitationem
                minima iste maxime debitis accusantium
                doloremque. Laudantium, eum. Similique, quaerat nemo!</p>
            <div className="full-container-width-button">
                <button className="btn-secondary"
                    onClick={() => navigate("/dashboard")}>
                    Back to dashboard</button>
            </div>
        </div>
    )
}

export default AdvanceCreateSuccess