import React from 'react';
import './about.css';
import Beau from '../../assets/beaufuneral3.JPG';
import BG from '../../assets/HTML_Blog-scaled.jpeg';

const About = () => {
    return (
        <div className='about-container d-flex justify-content-center flex-column align-items-center'>
            <div className='img-container d-flex justify-content-center'>
            <img className='beau-img' src={Beau} alt='Beau Fortier'/>
            </div>
            <div className='info-container col-6'>
            <p className='about-me'>Hello, My name is Beau Fortier. I am currently learning to be a Software Developer through Case Western Reserve University's Coding Bootcamp. Here I am building skills such as, HTML, CSS, JavaScript, JQuery, Node,js, React.js, MySQL, and more. I am currently employed at Chipotle Mexican Grill as a Service Manager. I have been working there for 4 years and I have climbed my way up the ladder to be in the position I am in. In this portfolio you will find information about me, the projects I have made in this bootcamp, a link to my resume, and contact information to get a hold of me. I hope you enjoy this interactive portfolio that showcases some of the skills I have learned.</p>
            </div>
        </div>
    )
}

export default About;