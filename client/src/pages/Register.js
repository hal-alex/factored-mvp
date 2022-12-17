import { useState } from 'react'
import { useGlobalContext } from '../context'

const Register = () => {

  const { passwordShow, setPasswordShow } = useGlobalContext()

  const [regError, setRegError] = useState("")
  const [regFormData, setRegFormData] = useState({
    title: "Please select",
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    acceptTermsConditions: false,
  })

  const titleOptions = ["Please select", "Ms", "Mr", "Mrs", "Miss"]

  const onlyLettersCheck = (stringValue) => {
    return /^[a-zA-Z]+$/.test(stringValue)
  }

  const handleRegisterFormSubmit = (e) => {
    e.preventDefault()
    setRegError("")
    if (regFormData.title == "Please select") {
      setRegError("Please select a valid title")
    } else if (!regFormData.firstName) {
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
    } else if (regFormData.password.length < 8) {
      setRegError("Password needs to be at least 8 characters long")
    } else if (regFormData.password === regFormData.password.toLowerCase()) {
      setRegError("Password need to have at least one upper case letter")
    } else if (!/\d/g.test(regFormData.password)) {
      setRegError("Password needs to have at least one number")
    } else if (!regFormData.acceptTermsConditions) {
      setRegError("You must accept our Terms & Conditions to create an account")
    } else {
      console.log("API request made")
    }
  }

  const handleChange = (e) => {
    setRegFormData({ ...regFormData, [e.target.name]: e.target.value })
  }

  return (
    <div className="form-div">
      <form className="form-container">
        <h3>Register New Account</h3>
        <label>Title
          <select name="title" onChange={handleChange}>
            {titleOptions.map((title, index) => {
              return <option key={index}>{title}</option>
            })}
          </select>
        </label>
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
            type={passwordShow ? "text" : "password"}
            name="password"
          />
          <p style={{ textDecoration: "underline" }}
            onClick={() => setPasswordShow(!passwordShow)}>
            {passwordShow ? "hide password" : "show password"}</p>
        </label>
        <label>
          <input type="checkbox" onClick={() => setRegFormData((oldValue) => {
            return {
              ...oldValue, "acceptTermsConditions":
                !regFormData.acceptTermsConditions
            }
          })} />
          I accept Factored's Terms & Conditions and Privacy Policy
        </label>
        {regError}
        <button onClick={handleRegisterFormSubmit}>Create Account</button>
      </form>
    </div>
  )
}

export default Register