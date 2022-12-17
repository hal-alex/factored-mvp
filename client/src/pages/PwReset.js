import React from 'react'
import { useState } from 'react'


const PwReset = () => {

  const [pwResetFormError, setPwResetFormError] = useState("")
  const [formMessage, setFormMessage] = useState("")
  const [pwResetFormData, setPwResetFormData] = useState({
    emailAddress: ""
  })

  const handlePwResetFormSubmit = (e) => {
    e.preventDefault()
    setPwResetFormError("")
    if (!pwResetFormData.emailAddress) {
      setPwResetFormError("Email address is required")
    } else if (!pwResetFormData.emailAddress.includes("@") ||
      !pwResetFormData.emailAddress.includes(".")) {
      setPwResetFormError("Email address is must be valid")
    } else {
      setFormMessage("We sent a password reset link to this email address")
      console.log("API request made")
    }
  }

  const handleChange = (e) => {
    setPwResetFormData({ ...pwResetFormData, [e.target.name]: e.target.value })
  }

  return (
    <div className="form-div">
      <form className="form-container">
        <h3>Reset Your Password</h3>
        <label> Email Address
          <input
            value={pwResetFormData.emailAddress}
            onChange={handleChange}
            required
            type="email"
            name="emailAddress"
          />
        </label>
        {pwResetFormError}
        {formMessage}
        <button onClick={handlePwResetFormSubmit}>Reset Password</button>
      </form>
    </div>
  )
}

export default PwReset