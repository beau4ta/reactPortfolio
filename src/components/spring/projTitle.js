import React from 'react';
import { useSpring, animated } from 'react-spring';

const ProjTitle = () => {
    const styles = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 400 })

    return (<animated.div style={styles}>
        <div className='d-flex justify-content-center'>
        <div className="proj-title-con col-6">
          <h1 className="proj-main-title">
            Projects
          </h1>
          <p className="proj-sub-title">
            As a student at Case Western Reserve University, I have been exposed to many technologies
            and opportunites to create many different projects. Here are some of the assignments I deem to be most important!
          </p>
        </div>
        </div>
    </animated.div>
    )
}

export default ProjTitle;
