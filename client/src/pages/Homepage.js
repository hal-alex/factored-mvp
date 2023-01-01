import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <main className="main-flex-container">
            <div className="homepage-flex-container">
                <h2>Welcome to Factored</h2>
                <Link to="/register">
                    <button className="btn-primary">Register</button>
                </Link>
                <Link to="/login">
                    <button className="btn-primary">Log In</button>
                </Link>
            </div>
        </main>

    )
}

export default Homepage