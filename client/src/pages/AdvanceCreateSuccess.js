import React from 'react'
import { useNavigate } from "react-router-dom"

const AdvanceCreateSuccess = () => {

    const navigate = useNavigate()

    return (
        <div className="dashboard-div">
            <h3>Thank you for creating this Advance!</h3>
            <p>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Neque quas iusto et
                sint ipsa ex cumque, ipsam unde exercitationem
                minima iste maxime debitis accusantium
                doloremque. Laudantium, eum. Similique, quaerat nemo!</p>
            <button onClick={() => navigate("/dashboard")}>Back to dashboard</button>
        </div>
    )
}

export default AdvanceCreateSuccess