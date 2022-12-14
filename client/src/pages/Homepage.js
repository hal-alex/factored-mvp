import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            <div>Welcome to Factored</div>
            <Link to="/register"><button>Register</button></Link>
            <Link to="/login"><button>Log In</button></Link>
        </div>
    )
}

export default Homepage