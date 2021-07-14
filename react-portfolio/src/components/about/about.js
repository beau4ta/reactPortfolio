import React from 'react';
import './about.css';
import Beau from '../../assets/beaufuneral3.JPG';
import Info from '../spring/info';
import Image from '../../components/spring/image'
import Buttons from '../spring/buttons';


const About = () => {
    return (
        <div className='about-container d-flex justify-content-center flex-column align-items-center'>
           <Image />
           <Buttons />
            <Info />
        </div>
    )
}

export default About;