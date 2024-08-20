import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PresentationPartTwo from '../components/PresentationPartTwo';

const About = () => {
  return (
    <div>
      <Navbar />
      <PresentationPartTwo
        heading="About"
        headingText="I'm a Software Developer and Civil Engineer."
      />
      <Footer />
    </div>
  );
};

export default About;
