import React from 'react';
import { useSpring, animated } from 'react-spring';

function HeaderName() {
    const styles = useSpring({
      loop: true,
      to: [
        { opacity: 1, color: '#f495b3' },
        { opacity: 0, color: 'rgb(14,26,19)' },
      ],
      from: { opacity: 0, color: 'red' },
    })
    // ...
    return <animated.div style={styles}><h1>Beau Fortier</h1></animated.div>
  }

  export default HeaderName;