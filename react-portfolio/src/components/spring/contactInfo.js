import React from 'react';
import { useSpring, animated } from 'react-spring';

const ContactInfo = () => {
    const styles = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 500 })

    return (<animated.div style={styles}>
        <div className='d-flex justify-content-center'>
        <div className='contact-info d-flex flex-column col-12'>
                <a className='email' href='mailto:beaufortier13@gmail.com'>beaufortier13@gmail.com</a>
                <a className='number' href='tel:+1440-657-2746'>440-657-2746</a>
            </div>
            </div>
    </animated.div>
    )
}

export default ContactInfo;
