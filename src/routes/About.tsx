import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PresentationPartTwo from '../components/PresentationPartTwo';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <PresentationPartTwo
        heading="About"
        headingText="I'm a Software Developer and Civil Engineer."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
