import React, { FC, useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import '../../../styles/Home/componets/Intro.css';

const Intro: FC = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    
    return(
        <div className="intro-background" onMouseMove={handleMouseMove}>
            <div className="intro-background-screen">
                <div className="intro-header-container">
                    <h1>Hello,</h1>
                    <TypewriterEffect text="I'm Alexander Martinez"/>
                    <p>A Computer Science Student at the University of North Texas</p>
                </div>
                <div 
                    className="light" 
                    style={{ 
                    top: `${position.y}px`,
                    left: `${position.x}px`
                    }}
                />
            </div>
        </div>
    );
}

interface TypewriterEffectProps {
    text: string;
}

const TypewriterEffect: FC<TypewriterEffectProps> = (props) => {
    return (
        <h1>
            <Typewriter
                onInit={(typewriter) => {
                typewriter.typeString(props.text).start();
            }}
            />
        </h1>
    );
}

export default Intro;