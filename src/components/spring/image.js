import React from 'react';
import { useSpring, animated } from 'react-spring';
import Beau from '../../assets/beaufuneral3.JPG';

const Image = () => {
    const styles = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 300 })

    return (<animated.div style={styles}>
        <div className='img-container d-flex justify-content-center'>
                <img className='beau-img' src={Beau} alt='Beau Fortier' />
            </div>
    </animated.div>
    )
}

export default Image;