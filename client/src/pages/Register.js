import { useState }from 'react'

const Register = () => {

  const [regError, setRegError] = useState(false)

  const handleRegisterFormSubmit = (event) => {
    event.preventDefault()
    console.log("test")
  }

  return (
    <div className="">
      <form>
        <h3>Register New Account</h3>
        <label>First Name
          <input type="text" name="firstname" placeholder="" />
        </label>
        <label> Last Name
          <input type="text" name="lastname" placeholder="" />
        </label>
        <label> Email Address
          <input type="email" name="emailaddress" id="" />
        </label>
        <label> Mobile Number
          <input type="tel" name="" id="" />
        </label>
        <label> Password
          <input type="password" name="password" id="" />
        </label>
        <button onClick={handleRegisterFormSubmit}>Create Account</button>
      </form>
    </div>
  )
}

export default Register