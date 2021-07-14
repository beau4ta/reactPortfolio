import React from 'react';
import { useSpring, animated } from 'react-spring';
import ResumeImg from '../../assets/resumeSS.png';

const ResumeFade = () => {
    const styles = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 400 })

    return (<animated.div style={styles}>
         <a className='resume-link' href="https://docs.google.com/document/d/17gMRMCYLH5X5xLUvqPVZd0vVnyPHyqlK81p0ww3ilZQ/edit">
            <img className='resume-img' src={ResumeImg} alt='resume'/>
            </a>
    </animated.div>
    )
}

export default ResumeFade;