import React from 'react'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'
import AddressHistoryDetails from '../components/AddressHistoryDetails'
import AddressHistoryInput from '../components/AddressHistoryInput'

const AddressVerification = () => {
  const { userProfileTestData } = useGlobalContext()
  return (
    <div className="dashboard-div">
      <h3>Address Verification</h3>
      {userProfileTestData.hasAddressHistory ?

        <AddressHistoryDetails></AddressHistoryDetails>
        :
        <AddressHistoryInput></AddressHistoryInput>
      }
    </div>
  )
}

export default AddressVerification