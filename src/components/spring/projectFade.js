import React from 'react';
import { useSpring, animated } from 'react-spring';
import { projects } from '../../data';

const ProjectFade = () => {
    const styles = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 600 })

    return (
    <animated.div style={styles}>
        <div className="row proj-main-container d-flex justify-content-center align-items-center flex-wrap container-fluid">
          {projects.map((project) => (
            <div className='proj-container d-flex col-5'>
            <a href={project.link} key={project.image} className="proj-link">
              <div className="container-fluid d-flex flex-column align-items-center">
                  <h1 className="proj-main-title">
                    {project.title}
                  </h1>
                  <p className="proj-sub-title">{project.description}</p>
                <img
                  alt="Project"
                  className="proj-image"
                  src={project.image}
                />
                <h2 className="proj-sub">
                    {project.subtitle}
                  </h2>
                  <a className="repo" href={project.repo}>REPO LINK</a>
              </div>
            </a>
            </div>
          ))}
        </div>
    </animated.div>
    )
}

export default ProjectFade;