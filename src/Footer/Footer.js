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
        <a href="https://kgeorgewilliam60@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://github.com/kidde60">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kidde-george-william/">
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com/KGWilliam60">
          <FaTwitter />
        </a>
        <a href="https://george-william-kidde-portifolio.netlify.app/">
          <i className="fa-solid fa-globe" />
        </a>
      </div>
    </div>
  );
}
