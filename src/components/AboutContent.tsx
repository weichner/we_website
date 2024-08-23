import React from 'react';
import './AboutContentStyles.css';
import { Link } from 'react-router-dom';
import img4 from '../assets/react1.webp';
import img5 from '../assets/react2.webp';

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>I'm Werner Eichner</h1>
        <p>
          I'm a Software Developer and Civil Engineer. I have a passion for
          coding and creating new things. I'm always looking for new challenges
          and opportunities to grow as a developer.{' '}
        </p>
        <Link to={'/contact'}>
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={img4} alt="react-image" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={img5} alt="react-image" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
