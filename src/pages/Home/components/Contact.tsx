import React, { FC } from 'react';
import { BsGithub } from 'react-icons/bs';
import '../../../styles/Home/componets/Contact.css';

const Contact: FC = () => {
    return(
        <section id="contact-section">
            <div className="contact-section-content">
                <div>
                    <h1>Contact Me</h1>
                    <div>
                        <BsGithub/>
                        <a>Github</a>
                    </div>
                    <div>
                        <a>LinkedIn</a>
                    </div>
                    <div>
                        <a>galexander1099</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;