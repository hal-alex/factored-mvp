import React from 'react'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'
import AddressHistoryDetails from '../components/AddressHistoryDetails'
import AddressHistoryInput from '../components/AddressHistoryInput'

const AddressVerification = () => {
  const { userProfileTestData } = useGlobalContext()
  return (
    <div className="generic-container">
      <h2>Address Verification</h2>
      {userProfileTestData.hasAddressHistory ?

        <AddressHistoryDetails></AddressHistoryDetails>
        :
        <AddressHistoryInput></AddressHistoryInput>
      }
    </div>
  )
}

export default AddressVerification