import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-center">
            <ul className="navlinks">
                <NavLink to="/">Homepage</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar