import React from 'react'
import { NavLink } from 'react-router-dom/dist'

function Home() {
    return (
        <div>
            <NavLink to={'/login'}>Login</NavLink> <br />
            <NavLink to={'/register'}>Register</NavLink>
        </div>
    )
}

export default Home