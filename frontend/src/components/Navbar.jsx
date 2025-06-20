import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' // Assuming you have a CSS file for styling the navbar
const Navbar = () => {
   

  return (
    <div>
        <nav className="navbar">
            <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/services'>Services</Link>
            </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar