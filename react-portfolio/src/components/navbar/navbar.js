import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid d-flex justify-content-center">
                    <div class="list-container">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="link" href="/">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="link" href="/projects">Projects</a>
                        </li>
                        <li class="nav-item">
                        <a class="link" href="/resume">Resume</a>
                        </li>
                        <li class="nav-item">
                        <a class="link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;