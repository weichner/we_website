import React from 'react';
import './FooterStyles.css';
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitch,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left-section">
          <div className="location">
            <FaHome size={20} style={{ color: '#fff ', marginRight: '2rem' }} />
            <div>
              <p>Vila Nova de Gaia, Porto.</p>
              <p>Portugal.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff ', marginRight: '2rem' }}
              />
              +351 911 053 792
            </h4>
          </div>
          <div className="mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff ', marginRight: '2rem' }}
              />
              eichnerw2@gmail.com
            </h4>
          </div>
        </div>
        <div className="footer-right-section">
          <h4>So you are still here? check this out</h4>
          <p>Happy to discuss more about me and how I can help you</p>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/weichner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ color: '#fff ', marginRight: '1rem' }}
              />
            </a>
            <a
              href="https://www.github.com/weichner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                style={{ color: '#fff ', marginRight: '1rem' }}
              />
            </a>
            <a
              href="https://www.twitch.tv/weichner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitch
                size={30}
                style={{ color: '#fff ', marginRight: '1rem' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
