import React from 'react';
import { projects } from '../../data';
import './project.css';
import ProjectFade from '../spring/projectFade';
import ProjTitle from '../spring/projTitle';

const Projects = () => {
    return (
        <section id="projects" className="container-fluid d-flex flex-column align-items-center">
        <ProjTitle />
        <ProjectFade />
    </section>
    )
}

export default Projects;