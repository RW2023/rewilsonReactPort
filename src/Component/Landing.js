import React from 'react';
import './Landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faDev, faStackOverflow, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Landing extends React.Component {
    render() {
        return (
            <div id='home'>
                <div className="intro" id="intro">Hello, I'm Ryan!</div>
                <div className="tagline" id="tagline">All-Star Rookie | Code Junkie | Linux CL Hacker |  Junior  Dev</div>
                <div className="icons-social" id='LINKS'>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/RW2023">
                        <FontAwesomeIcon className="social-icon" icon={faGithub} title="Github" />
                        <span className="sr-only">Github</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ryanwilson2009">
                        <FontAwesomeIcon className="social-icon" icon={faTwitter} title="Twitter" />
                        <span className="sr-only">Twitter</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://dev.to/rw2023">
                        <FontAwesomeIcon className="social-icon" icon={faDev} title="DEV Community" />
                        <span className="sr-only">DEV Community</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/20805392/rew">
                        <FontAwesomeIcon className="social-icon" icon={faStackOverflow} title="StackOverflow" />
                        <span className="sr-only">StackOverflow</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ryan-e-wilson/">
                        <FontAwesomeIcon className="social-icon" icon={faLinkedin} title="LinkedIn" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/ryanwilsonimages/'>
                        <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                        <span className="sr-only">Instagram</span>
                        </a>
                </div>
            </div>
        );
    }
}

export default Landing;
