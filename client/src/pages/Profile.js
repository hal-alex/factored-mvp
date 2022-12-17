import React, { useState } from 'react'
import { useGlobalContext } from '../context'

const ProfilePage = () => {

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
    <div className="dashboard-div">
      <h4>ProfilePage</h4>
      <div>
        <p>Title: {userProfileTestData.title}</p>
        <p>First name: {userProfileTestData.firstName}</p>
        <p>Last name: {userProfileTestData.lastName}</p>
        <p>Email addres: {userProfileTestData.emailAddress}</p>
        <p>Verification status:
          {userProfileTestData.ifVerified ?
            "Verified" : "Unverified"}</p>
        <p>Contact number:
          {userProfileTestData.contactNumber ?
            userProfileTestData.contactNumber :
            <button onClick={() =>
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
            <button onClick={handleProfileFormChange}>Submit</button>
          </form>
        }
      </div>
    </div>
  )
}

export default ProfilePage