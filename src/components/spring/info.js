import React from 'react';
import { useSpring, animated } from 'react-spring';

const Info = () => {
    const styles = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 700 })

    return (<animated.div style={styles}>
        <div className='d-flex justify-content-center align-items-center'>
        <div className='info-container col-6'>
            <p className='about-me'>Hello, My name is Beau Fortier. I am currently learning to be a Software Developer through Case Western Reserve University's Coding Bootcamp. Here I am building skills such as, HTML, CSS, JavaScript, JQuery, Node,js, React.js, MySQL, and more. I am currently employed at Chipotle Mexican Grill as a Service Manager. I have been working there for 4 years and I have climbed my way up the ladder to be in the position I am in. In this portfolio you will find information about me, the projects I have made in this bootcamp, a link to my resume, and contact information to get a hold of me. I hope you enjoy this interactive portfolio that showcases some of the skills I have learned.</p>
        </div>
        </div>
    </animated.div>
    )
}

export default Info;

