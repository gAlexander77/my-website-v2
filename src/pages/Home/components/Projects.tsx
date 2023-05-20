import React, { FC } from 'react';
import projectsData from '../data/projects.json';
import '../../../styles/Home/componets/Projects.css';

const Projects: FC = () => {
    
    const projects = projectsData;
    console.log(projects);

    return(
        <>
            <h1 className="projects-title">Projects</h1>
            <ListOfProjects projects={projects}/>
        </>
    );
}

interface Project {
    name: string;
    techStack: string[];
}

interface ListofProjectsProps {
    projects: Project[];
}

const ListOfProjects: FC<ListofProjectsProps> = ({projects}) => {
    return(
        <div className="list-of-projects-container">
            {projects.map((project, index) =>(
                <IndividualProject key={index} name={project.name} techStack={project.techStack}/>
            ))}
        </div>
    );
}

interface IndividualProjectProps {
    name: string;
    techStack: string[];
}

const IndividualProject: FC<IndividualProjectProps> = ({name, techStack}) => {
    return(
        <div className="individual-project-container">
            <h1>{name}</h1>
            <div className="tech-stack-container">
                {techStack.map((tech, index)=>(
                    <p key={index}>{tech}</p>
                ))}
            </div>
            <div className="individual-project-animated-background"/>
        </div>
    );
}

export default Projects;