import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

axios.defaults.baseURL = 'http://127.0.0.1:8000'


const Login = () => {

  const navigate = useNavigate()

  const { passwordShow, setPasswordShow } = useGlobalContext()

  const [loginFormError, setLoginFormError] = useState("")
  const [formMessage, setFormMessage] = useState("")
  const [loginFormData, setLoginFormData] = useState({
    emailAddress: "",
    password: "",
  })

  const API_URL = "/api/user/token/"

  const makeAPIRequest = async () => {
    try {
      const response = await axios.post(API_URL, {
        email: loginFormData.emailAddress,
        password: loginFormData.password,
      })
      console.log(response)
      setLoginFormError("")
      setFormMessage("Logged in successfully!")
      window.localStorage.setItem("factored_token", response.data.token)
      setTimeout(() => {
        navigate("/dashboard")
      }, 3000)
    } catch (error) {
      console.log(error)
      setLoginFormError(error.message)
    }
  }

  const handleLoginFormSubmit = (e) => {
    e.preventDefault()
    setLoginFormError("")
    if (!loginFormData.emailAddress) {
      return setLoginFormError("Email address is required")
    } else if (!loginFormData.emailAddress.includes("@") ||
      !loginFormData.emailAddress.includes(".")) {
      return setLoginFormError("Email address is must be valid")
    } else if (!loginFormData.password) {
      return setLoginFormError("Password is required")
    } else if (loginFormData.password.length < 8) {
      return setLoginFormError("Password needs to be at least 8 characters long")
    } else if (loginFormData.password === loginFormData.password.toLowerCase()) {
      return setLoginFormError("Password need to have at least one upper case letter")
    } else if (!/\d/g.test(loginFormData.password)) {
      return setLoginFormError("Password needs to have at least one number")
    } else {
      console.log("API request made")
      makeAPIRequest()
    }
  }

  const handleChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value })
  }

  return (
    <form className="auth-form-container">
      <h2>Access Your Account</h2>
      <label>Email Address</label>
      <input
        value={loginFormData.emailAddress}
        onChange={handleChange}
        required
        type="email"
        name="emailAddress"
      />
      <label>Password</label>
      <input
        value={loginFormData.password}
        onChange={handleChange}
        required
        type={passwordShow ? "text" : "password"}
        name="password"
      />
      <p style={{ textDecoration: "underline" }} onClick={() =>
        setPasswordShow(!passwordShow)}>
        {passwordShow ? "hide password" : "show password"}</p>
      {loginFormError ? <p className="form-error-text">{loginFormError}</p> : ""}
      {formMessage ? <p className="form-success-text">{formMessage}</p> : ""}
      <Link to="/forgotpassword">Forgot password?</Link>
      <button
        className="btn-secondary"
        onClick={handleLoginFormSubmit}>Log In</button>
    </form>
  )
}

export default Login