import React from 'react';
import { useSpring, animated } from 'react-spring';

function FooterName() {
    const styles = useSpring({
      loop: true,
      to: [
        { opacity: 1, color: '#7E00C2' },
        { opacity: 0, color: 'rgb(14,26,19)' },
      ],
      from: { opacity: 0, color: 'red' },
    })
    // ...
    return <animated.div style={styles}><h1>Case Western Reserve University, 2021</h1></animated.div>
  }

  export default FooterName;