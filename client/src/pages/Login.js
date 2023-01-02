import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
const Login = () => {

  const { passwordShow, setPasswordShow } = useGlobalContext()

  const [loginFormError, setLoginFormError] = useState("")
  const [loginFormData, setLoginFormData] = useState({
    emailAddress: "",
    password: "",
  })

  const handleLoginFormSubmit = (e) => {
    e.preventDefault()
    setLoginFormError("")
    if (!loginFormData.emailAddress) {
      setLoginFormError("Email address is required")
    } else if (!loginFormData.emailAddress.includes("@") ||
      !loginFormData.emailAddress.includes(".")) {
      setLoginFormError("Email address is must be valid")
    } else if (!loginFormData.password) {
      setLoginFormError("Password is required")
    } else if (loginFormData.password.length < 8) {
      setLoginFormError("Password needs to be at least 8 characters long")
    } else if (loginFormData.password === loginFormData.password.toLowerCase()) {
      setLoginFormError("Password need to have at least one upper case letter")
    } else if (!/\d/g.test(loginFormData.password)) {
      setLoginFormError("Password needs to have at least one number")
    } else {
      console.log("API request made")
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
      <Link to="/forgotpassword">Forgot password?</Link>
      <button
        className="btn-secondary"
        onClick={handleLoginFormSubmit}>Log In</button>
    </form>
  )
}

export default Login