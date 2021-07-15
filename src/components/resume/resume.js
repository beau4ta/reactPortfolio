import React from 'react';
import './resume.css';
import ResumeImg from '../../assets/resumeSS.png';
import ResumeFade from '../spring/resumefade';
import Info2 from '../spring/info2';

const Resume = () => {
    return (
        <div className='resume-container d-flex flex-column align-items-center'>
            <ResumeFade />
            <Info2 />
        </div>
    )
}

export default Resume;