import React, { FC, useEffect, useRef, useState } from 'react';
import skillsData from '../data/skills.json';
import '../../../styles/Home/componets/Skills.css';
import DecodeEffect from '../../../components/DecodeEffect';

const Skills: FC = () => {
    const data = skillsData;
    console.log(data);

    const [inView, setInView] = useState(false);
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


    return(
        <>
            <div ref={ref} className="skills-section-content">
                <h1 className="skills-section-title">
                    {inView && (
                        <DecodeEffect
                            text="My Skills"
                            solveSpeed={1}
                            randomSpeed={75}
                        />
                    )}
                </h1>
                <div className="skills-container">
                    {data.map((skills, index) => (
                        <SkillsCategory key={index} category={skills.category} skills={skills.skills} index={index}/>
                    ))}                    
                </div>
            </div>
        </>
    );
}

interface SkillsCategoryProps {
    category: string;
    skills: string[];
    index: number;
}

const SkillsCategory: FC<SkillsCategoryProps> = (props) => {
    return (
        <div className="skills-category-container">
            <h1 className="title-of-list-of-skills">{props.category}</h1>
            <div className="list-of-skills">
                {props.skills.map((skill, index) => (
                    <IndividualSkill key={index} index={index} skill={skill}/>
                ))}
            </div>
        </div>
    );    
}

const IndividualSkill: FC<{skill: string, index: number}> = ({skill, index}) => {
    return (
        <div className="individual-skill">
            <p>{skill}</p>
        </div>
    );
}

export default Skills;
