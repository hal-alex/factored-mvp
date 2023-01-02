import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {

  const navigate = useNavigate()

  const { userProfileTestData, setUserProfileTestData } = useGlobalContext()
  const [showForm, setShowForm] = useState(false)
  const [newNumber, setNewNumber] = useState("")

  const handleProfileFormChange = (e) => {
    e.preventDefault()
    setUserProfileTestData({ ...userProfileTestData, "contactNumber": newNumber })
    setShowForm(false)
  }

  const handleChange = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <p className="profile-title">Title: {userProfileTestData.title}</p>
      <p className="profile-title">First name: {userProfileTestData.firstName}</p>
      <p className="profile-title">Last name: {userProfileTestData.lastName}</p>
      <p className="profile-title">Email addres: {userProfileTestData.emailAddress}</p>
      <p className="profile-title">Verification status: 
        {userProfileTestData.ifVerified ?
          "Verified" : "Unverified"}</p>
      <p className="profile-title">Address history: 
        {userProfileTestData.hasAddressHistory ?
          "Submitted" : "Incomplete"}</p>
      <p className="profile-title">Contact number: 
        {userProfileTestData.contactNumber ?
          userProfileTestData.contactNumber :
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
          <button className="btn-secondary" onClick={handleProfileFormChange}>Submit</button>
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