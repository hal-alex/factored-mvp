import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="">
        <div className="">
            <ul className="nav-bar-links">
                <NavLink to="/">Homepage</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar