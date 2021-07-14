import React from 'react';
import './header.css';
import HeaderName from '../name/name.js';

const Header = () => {
    return (
        <div className='header-container'>
            <header className='header'>
                <div className='header-title'>
                <HeaderName />
                </div>
            </header>
        </div>
    )
}

export default Header;