import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Dhirajkumar Pal.</span>
                </h1>
                <p className="h-sub-text">
                    Full stack engineering analyst at accenture<br/> 
                    Hardworking,keen to learn  professional software engineer.
                    
                </p>
                <div className="icons">
                    <Link to="/" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <a href="https://github.com/Dhirajkumarpal" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <Link to="/" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
