import React from 'react'
import { NavLink } from "react-router-dom"
import LOGO from "../assets/factored_logo.png"

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="header-logo">
        <NavLink to="/" className="main-header__brand">
          <img src={LOGO} alt="" />
        </NavLink>
      </div>
      <nav className="main-navbar">
        <ul class="main-navbar__items">
          {/* <ul className="nav-bar-links"> */}
          <li className="main-navbar__item"><NavLink to="/">Homepage</NavLink></li>
          <li className="main-navbar__item"><NavLink to="/register">Register</NavLink></li>
          <li className="main-navbar__item"><NavLink to="/login">Login</NavLink></li>
          <li className="main-navbar__item"><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li className="main-navbar__item"><NavLink to="/profile">Profile</NavLink></li>
        </ul>
      </nav>
    </header>

  )
}

export default Navbar