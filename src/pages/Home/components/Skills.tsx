import React, { FC } from 'react';
import skillsData from '../data/skills.json';
import '../../../styles/Home/componets/Skills.css';

const Skills: FC = () => {
    const data = skillsData;
    console.log(data);

    return(
        <>
            <div className="skills-section-content">
                <h1 className="skills-section-title">My Skills</h1>
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
    const repeatedSkills = Array(20).fill(props.skills).flat();
    return (
        <div className="skills-category-container">
            <h1>{props.category}</h1>
            <div className={`list-of-skills ${props.index % 2 === 0 ? 'even' : 'odd'}`}>
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
