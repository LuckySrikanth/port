import React from 'react';
// import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div>
        <h2>Srikanth</h2>
        </div>
         <div className='desktopMenu'>
            <h2 className='navbarItems'>Home</h2>
            <h2 className='navbarItems'>About</h2>
            <h2 className='navbarItems'>Expirence</h2>
            <h2 className='navbarItems'>Projects</h2>
            <h2 className='navbarItems'>Skills</h2>   
         </div>
         <button className='Contact-button'>
            Contact Me
         </button>
    </nav>
  )
}

export default Navbar