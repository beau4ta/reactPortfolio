import React from 'react';
import { useSpring, animated } from 'react-spring';
import ResumeImg from '../../assets/resumeSS2.png';

const ResumeFade = () => {
    const styles = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 400 })

    return (<animated.div style={styles}>
         <a className='resume-link' href="https://docs.google.com/document/d/1sT0MH_7ZvKa4lNsWrU_r68qg7Cs_rDuzUEKgTDQTgRE/edit?usp=sharing">
            <img className='resume-img' src={ResumeImg} alt='resume'/>
            </a>
    </animated.div>
    )
}

export default ResumeFade;