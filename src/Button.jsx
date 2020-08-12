import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import{
faYoutube,
faFacebook,
faTwitter,
faInstagram,
faGithub,
faLinkedin,
faReddit
} from "@fortawesome/free-brands-svg-icons";

const Button = () => {
return(
    <>
    <div className="social-container">
    
    <a href="https://youtu.be/tuSBYcqplyc" className="y-social link" >
    <FontAwesomeIcon icon={faYoutube} size="3x" /> </a>

    <a href="https://www.facebook.com/Rising-Leafs-102477921569131/?ref=page_internal" className="f-social link" >
    <FontAwesomeIcon icon={faFacebook} size="3x" /> </a>

    <a href="https://twitter.com/LeafsRising " className="t-social link" >
    <FontAwesomeIcon icon={faTwitter} size="3x" /> </a>

    <a href="" className="i-social link" >
    <FontAwesomeIcon icon={faInstagram} size="3x" /> </a>

    <a href="https://github.com/Rising-Leafs " className="git-social link" >
    <FontAwesomeIcon icon={faGithub} size="3x" /> </a>

    <a href="" className="l-social link" >
    <FontAwesomeIcon icon={faLinkedin} size="3x" /> </a>

    <a href="" className="r-social link" >
    <FontAwesomeIcon icon={faReddit} size="3x" /> </a>

    
    <a href="risingleafs.initatives@gmail.com" className="g-social link" >
    <FontAwesomeIcon icon={faEnvelope} size="3x" /> </a>
    
    </div>

    </>
);
};

export default Button;