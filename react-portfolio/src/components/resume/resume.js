import React from 'react';
import './resume.css';
import ResumeImg from '../../assets/resumeSS.png';

const Resume = () => {
    return (
        <div className='resume-container d-flex flex-column align-items-center'>
            <a className='resume-link' href="https://docs.google.com/document/d/17gMRMCYLH5X5xLUvqPVZd0vVnyPHyqlK81p0ww3ilZQ/edit">
            <img className='resume-img' src={ResumeImg} alt='resume'/>
            </a>
            <div className='info-container col-4'>
            <h3 className='resume-info'>Here is a link to my resume. Click on the picture to be redirected!</h3>
            </div>
        </div>
    )
}

export default Resume;