import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return(
        <nav  className = "navbar">
            <h1 className = "logo">Ticks R Us</h1>

            <ul className = "navLinks">

                <li> <Link to = "/">Home</Link></li>
                <li> <Link to = "/about">About</Link></li>
                <li> <Link to = "/research">Research</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;



