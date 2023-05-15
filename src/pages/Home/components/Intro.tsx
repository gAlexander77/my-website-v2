import React, { FC } from 'react';
import Typewriter from 'typewriter-effect';
import '../../../styles/Home/componets/Intro.css';

const Intro: FC = () => {
    return(
        <section className="intro-section">
            <div className="intro-header-container">
                <h1>Hello,</h1>
                <TypewriterEffect text="I'm Alexander Martinez"/>
                <p>A Computer Science Student at the University of North Texas</p>
            </div>
        </section>
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