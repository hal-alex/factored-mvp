import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const ProfilePage = () => {

  const navigate = useNavigate()

  const { userDetails: { title, email, first_name,
    last_name, mobile_number,
    is_identity_verified,
    has_address_history } } = useGlobalContext()

  const [showForm, setShowForm] = useState(false)
  const [newNumber, setNewNumber] = useState("")

  const submitForm = (e) => {
    e.preventDefault()
    setShowForm(false)
    updateMobileNumber()
  }

  const handleChange = (e) => {
    setNewNumber(e.target.value)
  }

  const updateMobileNumber = async () => {
    try {
      const response = await axios.put("api/user/me/", {
        mobile_number: newNumber
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <p className="profile-title">Title: {title}</p>
      <p className="profile-title">First name: {first_name}</p>
      <p className="profile-title">Last name: {last_name}</p>
      <p className="profile-title">Email addres: {email}</p>
      <p className="profile-title">Verification status:
        {is_identity_verified ?
          " Verified" : " Unverified"}</p>
      <p className="profile-title">Address history:
        {has_address_history ?
          " Submitted" : " Incomplete"}</p>
      <p className="profile-title">Contact number:
        {mobile_number ?
          mobile_number :
          <button className="btn-secondary" onClick={() =>
            setShowForm(!showForm)}>
            {showForm ? "Cancel" : "Add number"}</button>}
      </p>
      {showForm &&
        <form>
          <input
            type="tel"
            name="contactNumber"
            value={newNumber}
            onChange={handleChange}
          />
          <button className="btn-secondary" onClick={submitForm}>Submit</button>
        </form>
      }
      <button
        className="btn-secondary"
        onClick={() => navigate("/dashboard")}>
        Back to dashboard</button>
    </div>
  )
}

export default ProfilePage