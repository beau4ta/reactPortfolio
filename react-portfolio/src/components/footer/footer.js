import React from 'react';
import './footer.css';
import FooterName from '../name/footerName';

const Footer = () => {
    return(
        <div className='footer-container d-flex justify-content-center align-items-center'>
            <footer className='footer'>
                <FooterName />
            </footer>
        </div>
    )
}

export default Footer;