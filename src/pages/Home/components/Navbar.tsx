import React, { FC } from 'react';
import '../../../styles/Home/componets/Navbar.css';

const Navbar: FC = () => {
    return (
        <div className="navbar-component">
            <Leftside/>
            <Rightside/>
        </div>
    );
};

const Leftside: FC = () => {
    return (
        <div className="navbar-left">
            <div className="logo">
                <a href="/">Your Name</a>
            </div>
        </div>
    )
}

const Rightside: FC = () => {
    return (
        <div className="navbar-right">
            <div className="nav-links">
                <a href="/skills">Skills</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact Me</a>
            </div>
        </div>
    )
}

export default Navbar;