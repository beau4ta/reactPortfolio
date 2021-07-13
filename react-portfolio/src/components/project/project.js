import React from 'react';
import { projects } from '../../data';
import './project.css';

const Projects = () => {
    return (
        <section id="projects" className="container-fluid d-flex flex-column align-items-center">
        <div className="proj-title-con col-6">
          <h1 className="proj-main-title">
            Projects
          </h1>
          <p className="proj-sub-title">
            As a student at Case Western Reserve University, I have been exposed to many technologies
            and opportunites to create many different projects. Here are some of the assignments I deem to be most important!
          </p>
        </div>
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
    </section>
    )
}

export default Projects;