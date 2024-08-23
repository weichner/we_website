import React from 'react';
import './ProjectCardsStyles.css';
import { NavLink } from 'react-router-dom';

interface ProjectCardsProps {
  imgsrc: string;
  title: string;
  text: string;
  source: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  imgsrc,
  title,
  text,
  source,
}) => {
  return (
    <div className="project-card">
      <img src={imgsrc} alt="imgLaptop" />
      <h2 className="project-title">{title}</h2>
      <div className="card-details">
        <p>{text}</p>
        <div className="card-btns">
          <NavLink
            to={source}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
