import React from 'react';
import { useSpring, animated } from 'react-spring';

const ContactFade = () => {
    const styles = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 500 })

    return (<animated.div style={styles}>
        <div className='d-flex justify-content-center'>
         <div className='contact-title col-8'>
                <h3 className='title'>Interested in working together? Here is my contact information!</h3>
            </div>
            </div>
    </animated.div>
    )
}

export default ContactFade;
