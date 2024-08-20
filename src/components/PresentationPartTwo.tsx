import React from 'react';
import './PresentationPartTwoStyles.css';

interface PresentationPartTwoProps {
  heading: string;
  headingText: string;
}

const PresentationPartTwo: React.FC<PresentationPartTwoProps> = ({
  heading,
  headingText,
}) => {
  return (
    <div className="presentation-two">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{headingText}</p>
      </div>
    </div>
  );
};

export default PresentationPartTwo;
