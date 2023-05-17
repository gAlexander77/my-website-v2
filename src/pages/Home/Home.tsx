import React, { FC, createRef } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import '../../styles/Home/Home.css';

const Home: FC = () => {

    const introRef = createRef<HTMLDivElement>();
    const skillsRef = createRef<HTMLDivElement>();
    const projectsRef = createRef<HTMLDivElement>();
    const contactRef = createRef<HTMLDivElement>();

    return(
        <div className="home-page">
            <Navbar 
                introRef={introRef} 
                skillsRef={skillsRef} 
                projectsRef={projectsRef} 
                contactRef={contactRef}
            />
            <section id="intro-section" ref={introRef}><Intro/></section>
            <section id="skills-section" ref={skillsRef}><Skills/></section>
            <section id="projects-section" ref={projectsRef}><Projects/></section>
            <section id="contact-section" ref={contactRef}><Contact/></section>            
        </div>
    );
}

export default Home;