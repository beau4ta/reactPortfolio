import React from 'react'
import './contact.css';
import Image from '../spring/image';
import ContactFade from '../spring/contactFade';
import ContactInfo from '../spring/contactInfo';

const Contact = () => {
    return (
        <div className='contact-container d-flex flex-column align-items-center'>
            <Image />
           <ContactFade />
           <ContactInfo />
        </div>
    )
}

export default Contact;