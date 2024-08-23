import React from 'react';
import './ProjectCardsStyles.css';
import ProjectCardData from '../data/CardsData';
import ProjectCards from './ProjectCards';

const Cards = () => {
  return (
    <div className="project-cards-container">
      <h1 className="project-heading">PROJECTS</h1>
      <div className="project-container">
        {ProjectCardData.map((val, index) => {
          return (
            <ProjectCards
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
