import React, { FC, useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import '../../../styles/Home/componets/Intro.css';

import DecodeEffect from '../../../components/DecodeEffect';

const Intro: FC = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    return(
        <div className="intro-background" onMouseMove={handleMouseMove}>
            <div className="intro-background-screen">
                <div className="intro-header-container">
                    <h1>
                        <DecodeEffect 
                            text="Alexander"
                            randomSpeed={100}
                            solveSpeed={1}
                        />
                    </h1>
                    <h1>
                        <DecodeEffect 
                            text="Martinez"
                            randomSpeed={100}
                            solveSpeed={1}
                        />
                    </h1>
                    <p>I am a Computer Science Student at the University of North Texas</p>
                </div>
                <div className="light" style={{ top: `${position.y}px`, left: `${position.x}px` }}
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
        <h1 className="test">
            <Typewriter
                onInit={(typewriter) => {
                typewriter.typeString(props.text).start();
            }}
            />
        </h1>
    );
}

export default Intro;