import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <nav className="navbar navbar-expand-lg navbar-toggleable-sm">
                <div className="container-fluid d-flex justify-content-center">
                    <div className="list-container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="link" to='/' >About</Link>
                        
                        </li>
                        <li className="nav-item">
                        <Link  className="link" to='/projects' >Projects</Link>
                        
                        </li>
                        <li className="nav-item">
                        <Link className="link"   to='/resume' >Resume</Link>
                        
                        </li>
                        <li className="nav-item">
                        <Link className="link" to='/contact' >Contact</Link>
                        
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;