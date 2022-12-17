import React, { useState } from 'react'

const ProfilePage = () => {

  const [showForm, setShowForm] = useState(false)
  const [userProfileTestData, setUserProfileTestData] = useState({
    id: "1",
    title: "Mr",
    firstName: "Alex",
    lastName: "Ha",
    emailAddress: "testing@gmail.com",
    contactNumber: "",
  })

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