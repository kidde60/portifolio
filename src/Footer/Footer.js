import React from 'react';
import {
  FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter,
} from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="background" />
      <div className="social" id="footer-social">
        <a href="mailto:kgeorgewilliam60@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://github.com/kidde60" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kidde-george-william/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com/KGWilliam60" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://george-william-kidde-portifolio.netlify.app/" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-globe" />
        </a>
      </div>
    </div>
  );
}
