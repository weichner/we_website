import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PresentationPartTwo from '../components/PresentationPartTwo';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PresentationPartTwo
        heading="Contact"
        headingText="Get in touch with me."
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
