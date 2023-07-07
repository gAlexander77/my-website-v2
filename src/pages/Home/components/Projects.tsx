import React, { FC, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import DecodeEffect from '../../../components/DecodeEffect';
import projectsData from '../data/projects.json';
import '../../../styles/Home/componets/Projects.css';

const Projects: FC = () => {
    
    const projects = projectsData;
    console.log(projects);

    const [inView, setInView] = useState(false);
    const [hasBeenViewed, setHasBeenViewed] = useState<boolean>(false);
    const ref = useRef(null);

    useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    // Set inView to true when the element is in the viewport
                    setInView(entry.isIntersecting);
                },
                {
                    root: null, // Use the browser viewport
                    threshold: 0.1, // Trigger when at least 10% of the element is in view
                }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
    }, []);

    useEffect(() => {
        if(hasBeenViewed === false && inView === true) {
            setHasBeenViewed(true);
        }
    },[inView]);

    return(
        <>
            <div className="projects-section-content">
                <h1 className="projects-title" ref={ref}>
                    {hasBeenViewed && (
                        <DecodeEffect
                            text="Projects"
                            solveSpeed={1}
                            randomSpeed={70}
                        />
                    )}
                </h1>
                <ListOfProjects 
                    projects={projects}
                    hasBeenViewed={hasBeenViewed}
                />
            </div>
        </>
    );
}

interface Project {
    name: string;
    techStack: string[];
}

interface ListofProjectsProps {
    projects: Project[];
    hasBeenViewed: boolean;
}

const ListOfProjects: FC<ListofProjectsProps> = ({projects, hasBeenViewed}) => {
    return(
        <div className="list-of-projects-container">
            {projects.map((project, index) =>(
                <IndividualProject 
                    key={index}
                    index={index}
                    name={project.name}
                    techStack={project.techStack}
                    hasBeenViewed={hasBeenViewed}
                />
            ))}
        </div>
    );
}

interface IndividualProjectProps {
    name: string;
    index: number;
    techStack: string[];
    hasBeenViewed: boolean;
}

const IndividualProject: FC<IndividualProjectProps> = ({name, techStack, index, hasBeenViewed}) => {
    return(
        <motion.div
            className="individual-project-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: hasBeenViewed ? 1 : 0 }}
            transition={{ delay: index * 0.5, duration: 0.5 }}
        >
            <h1>{name}</h1>
            <div className="tech-stack-container">
                {techStack.map((tech, index)=>(
                    <p key={index}>{tech}</p>
                ))}
            </div>
            <div className="individual-project-animated-background"/>
        </motion.div>
    );
}

export default Projects;