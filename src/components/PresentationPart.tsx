import React from 'react';
import './PresentationPartStyles.css';
import IntroImage from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

const PresentationPart = () => {
  return (
    <div className="presentation">
      <div className="mask">
        <img className="intro-img" src={IntroImage} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I'm Werner Eichner</p>
        <h1>Software Developer | Civil Engineer</h1>
        <div>
          <Link to={'/project'} className="btn">
            Projects
          </Link>
          <a
            href="mailto:eichnerw2@gmail.com?subject=Contact&body=Hello,"
            className="btn btn-light"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default PresentationPart;
