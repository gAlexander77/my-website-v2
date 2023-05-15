import React, { FC } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import '../../styles/Home/Home.css';

const Home: FC = () => {
    return(
        <div className="home-page">
            <Navbar/>
            <Intro/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default Home;