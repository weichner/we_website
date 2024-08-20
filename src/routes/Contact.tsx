import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PresentationPartTwo from '../components/PresentationPartTwo';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PresentationPartTwo
        heading="Contact"
        headingText="Get in touch with me."
      />
      <Footer />
    </div>
  );
};

export default Contact;
