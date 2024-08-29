import React, { useState, useEffect } from 'react';
import './FormStyles.css';
import { sendEmail } from '../utils/helpers';
import { validateEmail } from '../utils/helpers';
import Modal from './Modal';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState({
    email: '',
  });
  const [modalMessage, setModalMessage] = useState<string | null>('');

  useEffect(() => {
    if (modalMessage) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [modalMessage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'email') {
      if (value === '') {
        setError({
          ...error,
          email: '',
        });
      } else if (!validateEmail(value)) {
        setError({
          ...error,
          email: 'Invalid email format',
        });
      } else {
        setError({
          ...error,
          email: '',
        });
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    sendEmail(
      formData,
      (message) => setModalMessage(message),
      (message) => setModalMessage(message)
    );

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const closeModal = () => {
    setModalMessage(null);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <label>Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        {error.email && <span className="error">{error.email}</span>}
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        ></input>
        <label>Message</label>
        <textarea
          rows={6}
          placeholder="Type your message here"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button className="btn">Submit</button>
        {modalMessage && <Modal message={modalMessage} onClose={closeModal} />}
      </form>
    </div>
  );
};

export default Form;
