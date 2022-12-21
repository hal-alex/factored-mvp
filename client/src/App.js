import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PwReset from "./pages/PwReset"
import Profile from "./pages/Profile"
import AddressVerification from "./pages/AddressVerification"
import IDVerification from "./pages/IDVerification"
import IndividualAdvance from "./pages/IndividualAdvance"
import NewAdvance1 from "./pages/NewAdvance1"
import NewAdvance2 from "./pages/NewAdvance2"
import NewAdvance3 from "./pages/NewAdvance3"
import NewAdvance4 from "./pages/NewAdvance4"
import NewAdvanceConf from "./pages/NewAdvanceConf"
import AdvanceCreateSuccess from "./pages/AdvanceCreateSuccess"

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/forgotpassword" element={<PwReset></PwReset>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/addresshistory" element={<AddressVerification>
        </AddressVerification>}></Route>
        <Route path="/identityverification" element={<IDVerification>
        </IDVerification>}></Route>
        <Route path="/advances/:advanceID" element={<IndividualAdvance>
        </IndividualAdvance>}></Route>
        <Route path="/new-advance-1" element={<NewAdvance1></NewAdvance1>}></Route>
        <Route path="/new-advance-2" element={<NewAdvance2></NewAdvance2>}></Route>
        <Route path="/new-advance-3" element={<NewAdvance3></NewAdvance3>}></Route>
        <Route path="/new-advance-4" element={<NewAdvance4></NewAdvance4>}></Route>
        <Route path="/new-advance-confirmation"
          element={<NewAdvanceConf></NewAdvanceConf>}></Route>
        <Route path="/new-advance-success" element={<AdvanceCreateSuccess>
        </AdvanceCreateSuccess>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
