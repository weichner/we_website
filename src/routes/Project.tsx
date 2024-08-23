import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PresentationPartTwo from '../components/PresentationPartTwo';
import Cards from '../components/Cards';

const Project = () => {
  return (
    <div>
      <Navbar />
      <PresentationPartTwo
        heading="PROJECTS"
        headingText="Some of my most recent works."
      />
      <Cards />
      <Footer />
    </div>
  );
};

export default Project;
