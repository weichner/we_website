import React, { useState } from 'react';
import './FormStyles.css';
import { sendEmail } from '../utils/helpers';
import { validateEmail } from '../utils/helpers';

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

    sendEmail(formData);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
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
      </form>
    </div>
  );
};

export default Form;
