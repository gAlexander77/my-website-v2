import React, { FC, useEffect, useState, RefObject } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../../styles/Home/componets/Navbar.css';

interface NavbarProps {
    introRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
}

const Navbar: FC<NavbarProps> = ({ introRef, skillsRef, projectsRef, contactRef }) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);

    const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
        setIsScrolling(true);
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !isScrolling) {
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
    }, [introRef, skillsRef, projectsRef, contactRef, isScrolling]);

    useEffect(() => {
        let timeoutValue: number = 550;

        if (navigator.userAgent.includes('Chrome')) {
            timeoutValue = 550;
        } 
        else if (navigator.userAgent.includes('Firefox')) {
            timeoutValue = 200;
        }

        const timeout = setTimeout(() => {
            setIsScrolling(false);
        }, timeoutValue);

        return () => {
            clearTimeout(timeout);
        };
    }, [isScrolling]);

    return (
        <div className="navbar-component">
            <Leftside
                introRef={introRef}
                scrollToRef={scrollToRef}
                activeSection={activeSection}
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
    activeSection: string | null;
}

const Leftside: React.FC<LeftsideProps> = ({ introRef, scrollToRef, activeSection }) => {
    
    const [change, setChange] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        setCount(count + 1);
        if(count <= 2){
            setChange(true);
        }
    }, [activeSection]);

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    return (
        <div className="navbar-left">
            <AnimatePresence>
                {change && (
                    <motion.button 
                        className="logo"
                        onClick={() => scrollToRef(introRef)}
                        initial={activeSection === 'intro-section' ? 'visible' : 'hidden'}
                        animate={activeSection === 'intro-section' ? 'hidden' : 'visible'}
                        exit="hidden"
                        variants={variants}
                        transition={{ duration: 1 }}
                    >
                        Alexander Martinez
                    </motion.button>
                )}
            </AnimatePresence>
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
