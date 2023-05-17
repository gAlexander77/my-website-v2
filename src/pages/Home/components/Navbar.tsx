import React, { FC, useEffect, useState, RefObject } from 'react';
import '../../../styles/Home/componets/Navbar.css';

interface NavbarProps {
    introRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
}

const Navbar: FC<NavbarProps> = ({ introRef, skillsRef, projectsRef, contactRef }) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.7 }
        );

        const sections = [introRef, skillsRef, projectsRef, contactRef];
        sections.forEach(sectionRef => {
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
        });

        return () => {
            sections.forEach(sectionRef => {
                if (sectionRef.current) {
                    observer.unobserve(sectionRef.current);
                }
            });
        };
    }, [introRef, skillsRef, projectsRef, contactRef]);

    return (
        <div className="navbar-component">
            <Leftside
                introRef={introRef}
                scrollToRef={scrollToRef}
            />
            <Rightside
                skillsRef={skillsRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
                scrollToRef={scrollToRef}
                activeSection={activeSection}
            />
        </div>
    );
};

interface LeftsideProps {
    introRef: RefObject<HTMLDivElement>;
    scrollToRef: (ref: RefObject<HTMLDivElement>) => void;
}

const Leftside: FC<LeftsideProps> = ({ introRef, scrollToRef }) => {
    return (
        <div className="navbar-left">
            <button 
                className="logo" 
                onClick={() => scrollToRef(introRef)}
            >
                Alexander Martinez
            </button>
        </div>
    );
}

interface RightsideProps {
    skillsRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
    scrollToRef: (ref: RefObject<HTMLDivElement>) => void;
    activeSection: string | null;
}

const Rightside: FC<RightsideProps> = ({ skillsRef, projectsRef, contactRef, scrollToRef, activeSection }) => {
    return (
        <div className="navbar-right">
            <div className="nav-links">
                <button onClick={() => scrollToRef(skillsRef)} className={activeSection === 'skills-section' ? 'active' : ''}>Skills</button>
                <button onClick={() => scrollToRef(projectsRef)} className={activeSection === 'projects-section' ? 'active' : ''}>Projects</button>
                <button onClick={() => scrollToRef(contactRef)} className={activeSection === 'contact-section' ? 'active' : ''}>Contact Me</button>
            </div>
        </div>
    )
}

export default Navbar;
