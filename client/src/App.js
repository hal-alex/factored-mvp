import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PwReset from "./pages/PwReset"
import Profile from "./pages/Profile"

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
      </Routes>
    </BrowserRouter>
  )
}

export default App;
