import React from 'react'
import { NavLink } from "react-router-dom"
import LOGO from "../assets/factored_logo.png"
import { isAuthenticated } from "../auth/auth"
import { useEffect, useLocation } from 'react'
import { useNavigate } from "react-router-dom"

const Navbar = () => {

  // const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    window.localStorage.removeItem("token")
    navigate("/")
  }

  // useEffect(() => { }, [location.pathname])

  return (
    <header className="main-header">
      <div className="header-logo">
        <NavLink to="/" className="main-header__brand">
          <img src={LOGO} alt="" />
        </NavLink>
      </div>
      <nav className="main-navbar">
        <ul className="main-navbar__items">
          {/* <ul className="nav-bar-links"> */}
          <li className="main-navbar__item"><NavLink to="/">Homepage</NavLink></li>

          <li className="main-navbar__item"><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li className="main-navbar__item"><NavLink to="/profile">Profile</NavLink></li>
          {isAuthenticated() ?
            <p onClick={handleLogout}>Log out</p>
            :
            <>
              <li className="main-navbar__item"><NavLink to="/register">Register</NavLink></li>
              <li className="main-navbar__item"><NavLink to="/login">Login</NavLink></li>
            </>
          }
        </ul>
      </nav>
    </header>

  )
}

export default Navbar