// DecodeEffect Input Usage
// text: Text to decode to
// randomSpeed: Speed(ms) at which random characters generate (Ex. 20 = 1 generation every 20 ms)
// solveSpeed: rate of a solved character per random generation (lower input is faster)
// solveSpeed Ex. 1: [solveSpeed=0] every random generation a character in the string is solved.
// solveSpeed Ex. 2: [solvespeed=2] every 3 random generation a character in the string is solved.
import { FC, useEffect, useState } from 'react';

interface DecodeProps{
    text?: string;
    randomSpeed?: number;
    solveSpeed?: number;
}

const DecodeEffect: FC<DecodeProps> = ({text = '', randomSpeed = 20, solveSpeed = 0}) => { 
    
    const [currentText, setCurrentText] = useState<string>(getRandomString(text));
    
    const [tick, setTick] = useState<number>(0);    
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const decodeEffect = setInterval(() => {
            if (tick >= solveSpeed) {
                setCurrentText(getDecodedText(text, index));
                if(text !== currentText) {
                    setTick(0);
                    setIndex(index + 1);
                }                                
                
            } else {
                setCurrentText(getDecodedText(text, index));
                if(text !== currentText) {
                    setTick(tick + 1);
                }                
            }
            console.log(index);
            console.log(tick);
            if (currentText === text) {
                clearInterval(decodeEffect);
            }
        }, randomSpeed);
        return () => {
            clearInterval(decodeEffect);
        };
    }, [text, tick, index]);


    return(
        <>{currentText}</>
    );
}

function getDecodedText(text: string, index: number): string {
    return text.substring(0, index) + getRandomString(text).substring(index, text.length);
}

function getRandomString(text: string): string {
    let length: number = text.length;
    let result: string = '';
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export default DecodeEffect;