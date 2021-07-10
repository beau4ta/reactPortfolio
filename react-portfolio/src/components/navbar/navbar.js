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
                        <a class="link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="link" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                        <a class="link" href="#">Resume</a>
                        </li>
                        <li class="nav-item">
                        <a class="link" href="#">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;