import React from 'react';
import { useSpring, animated } from 'react-spring';

const Buttons = () => {
    const styles = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 500 })

    return (<animated.div style={styles}>
         <div className='button-container d-flex'>
                <a className='button' href='https://github.com/beau4ta'>GitHub</a>
                <a className='button' href='https://www.linkedin.com/in/beau-fortier-388058192/'>LinkedIn</a>
            </div>
    </animated.div>
    )
}

export default Buttons;