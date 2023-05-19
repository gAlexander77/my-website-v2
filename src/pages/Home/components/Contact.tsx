import React, { FC } from 'react';
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import '../../../styles/Home/componets/Contact.css';

const Contact: FC = () => {
    return(
        <>
            <div className="contact-container">
                <h1 className="contact-title">Contact Me</h1>
                <button className="contact-btn">
                    <MdEmail className="email-icon"/>
                    <p>gilbertalexandermartinezz@gmail.com</p>
                </button>
            </div>
            <div className="socials-container">     
                <a href='https://github.com/gAlexander77'>
                    <button className="social-link-btn">
                        <BsGithub className="git-icon"/>
                        <p>Github</p> 
                    </button>
                </a>
                <a href='https://github.com/gAlexander77'>
                    <button className="social-link-btn">
                        <BsLinkedin className="linkedin-icon"/>
                        <p>LinkedIn</p>
                    </button>
                </a>
            </div>
        </>
    );
}

export default Contact;