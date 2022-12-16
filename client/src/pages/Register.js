import { useState } from 'react'

const Register = () => {

  const [regError, setRegError] = useState("")
  const [regFormData, setRegFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  })

  const onlyLettersCheck = (stringValue) => {
    return /^[a-zA-Z]+$/.test(stringValue)
  }

  const handleRegisterFormSubmit = (e) => {
    e.preventDefault()
    setRegError("")
    if (!regFormData.firstName) {
      setRegError("First name is required")
    } else if (!onlyLettersCheck(regFormData.firstName)) {
      setRegError("First name must be valid (only letters)")
    } else if (!regFormData.lastName) {
      setRegError("Last name is required")
    } else if (!onlyLettersCheck(regFormData.lastName)) {
      setRegError("Last name must be valid (only letters)")
    } else if (!regFormData.emailAddress) {
      setRegError("Email address is required")
    } else if (!regFormData.emailAddress.includes("@") || 
        !regFormData.emailAddress.includes(".")) {
      setRegError("Email address is must be valid")
    } else if (!regFormData.password) {
      setRegError("Password is required")
    } else if (!regFormData.password) {
      setRegError("Password is required") 
    } else {
      console.log("API request made")
    }
  }

  const handleChange = (e) => {
    setRegFormData({ ...regFormData, [e.target.name]: e.target.value })
  }

  return (
    <div className="center">
      <form className="registration-form">
        <h3>Register New Account</h3>
        <label>First Name
          <input
            value={regFormData.firstName}
            onChange={handleChange}
            required
            type="text"
            name="firstName"
            placeholder="" 

            />
        </label>
        <label> Last Name
          <input
            value={regFormData.lastName}
            onChange={handleChange}
            required
            type="text"
            name="lastName"
            placeholder="" 
            />
        </label>
        <label> Email Address
          <input
            value={regFormData.emailAddress}
            onChange={handleChange}
            required
            type="email"
            name="emailAddress" 
            />
        </label>
        <label> Password
          <input
            value={regFormData.password}
            onChange={handleChange}
            required
            type="password"
            name="password" 
            />
        </label>
        {regError}
        <button onClick={handleRegisterFormSubmit}>Create Account</button>
      </form>
    </div>
  )
}

export default Register