import React from 'react';
import './header.css';
import HeaderName from '../name/name.js';
import Logo from '../spring/logo';

const Header = () => {
    return (
        <div className='header-container'>
            <header className='header'>
                <div className='header-title'>
                <HeaderName />
                <Logo />
                </div>
            </header>
        </div>
    )
}

export default Header;