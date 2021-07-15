import React from 'react';
import { useSpring, animated } from 'react-spring';

const Info2 = () => {
    const styles = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 700 })

    return (<animated.div style={styles}>
        <div className='d-flex justify-content-center'>
       <div className='info-container col-6'>
            <h3 className='resume-info'>Here is a link to my resume. Click on the picture to be redirected!</h3>
            </div>
            </div>
    </animated.div>
    )
}

export default Info2;