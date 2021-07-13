import React from 'react'
import './contact.css';
import Beau from '../../assets/beaufuneral3.JPG';

const Contact = () => {
    return (
        <div className='contact-container d-flex flex-column align-items-center'>
             <div className='img-container d-flex justify-content-center'>
            <img className='beau-img' src={Beau} alt='Beau Fortier'/>
            </div>
            <div className='contact-title col-6'>
                <h3 className='title'>Interested in working together? Here is my contact information!</h3>
            </div>
            <div className='contact-info d-flex flex-column col-6'>
                <a className='email' href='mailto:beaufortier13@gmail.com'>beaufortier13@gmail.com</a>
                <a className='number' href='tel:+1440-657-2746'>440-657-2746</a>
            </div>
        </div>
    )
}

export default Contact;