import { useState } from 'react'
import { useGlobalContext } from '../context'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000'

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

  const API_URL = "/api/register"

  const makeAPIRequest = async () => {
    try {
      const response = await axios.post(API_URL, {
        email: regFormData.emailAddress,
        password: regFormData.password,
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
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
      makeAPIRequest()
    }
  }

  const handleChange = (e) => {
    setRegFormData({ ...regFormData, [e.target.name]: e.target.value })
  }

  return (

    <form className="auth-form-container">
      <h2>Register New Account</h2>
      <label>Title</label>
      <select name="title" onChange={handleChange}>
        {titleOptions.map((title, index) => {
          return <option key={index}>{title}</option>
        })}
      </select>
      <label>First Name</label>
      <input
        value={regFormData.firstName}
        onChange={handleChange}
        required
        type="text"
        name="firstName"
        placeholder=""
      />
      <label>Last Name</label>
      <input
        value={regFormData.lastName}
        onChange={handleChange}
        required
        type="text"
        name="lastName"
        placeholder=""
      />
      <label>Email Address</label>
      <input
        value={regFormData.emailAddress}
        onChange={handleChange}
        required
        type="email"
        name="emailAddress"
      />
      <label>Password</label>
      <input
        value={regFormData.password}
        onChange={handleChange}
        required
        type={passwordShow ? "text" : "password"}
        name="password"
      />
      <p className="auth-form-password-widget" onClick={() => setPasswordShow(!passwordShow)}>
        {passwordShow ? "hide password" : "show password"}</p>
      <div className="auth-form-checkbox">
        <input type="checkbox" onClick={() => setRegFormData((oldValue) => {
          return {
            ...oldValue, "acceptTermsConditions":
              !regFormData.acceptTermsConditions
          }
        })} />
        <label>I accept Factored's Terms & Conditions and Privacy Policy</label>
      </div>
      {regError ? <p className="form-error-text">{regError}</p> : ""}
      <button
        className="btn-secondary"
        onClick={handleRegisterFormSubmit}
      >Create Account</button>
    </form>

  )
}

export default Register