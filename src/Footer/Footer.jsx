import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">
            KGW<span className="footer-dot">.</span>
          </h3>
          <p className="footer-tagline">
            Crafting digital experiences with passion and precision.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <div className="footer-links">
            <button
              onClick={() => handleNavigation("/")}
              className="footer-link"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/About")}
              className="footer-link"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("/Projects")}
              className="footer-link"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation("/Contact")}
              className="footer-link"
            >
              Contact
            </button>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Connect</h4>
          <div className="footer-social">
            <a
              href="mailto:kgeorgewilliam60@gmail.com"
              className="footer-social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/kidde60"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/george-william-kidde/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/KGWilliam60"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://george-william-kidde-portifolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Website"
            >
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>
            © {currentYear} George William Kidde. Made with{" "}
            <FaHeart className="heart-icon" /> in Uganda
          </p>
        </div>
        <div className="footer-tech">
          <span>Built with React & Modern CSS</span>
        </div>
      </div>
    </footer>
  );
}
