import React, { FC, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
                    <motion.h1
                        initial={{ x: -1000 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Alexander
                    </motion.h1>
                    <motion.h1
                        initial={{ x: 1000 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <DecodeEffect
                            text="Martinez"
                            randomSpeed={100}
                            solveSpeed={1}
                        />
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 1, delay: 1.7 }}
                    >
                        Computer Science Student at the University of North Texas
                    </motion.p>
                </div>
                <div className="light" style={{ top: `${position.y}px`, left: `${position.x}px` }}
                />
            </div>
        </div>
    );
}

export default Intro;