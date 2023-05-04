import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter,
} from 'react-icons/fa';
import ProjectsCard from '../Projects/ProjectsCard';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Home.css';
import Resume from './Resume.pdf';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home">
          <h1 className="coln">
            Hello, I am
            {' '}
            <br />
            <span className="span">George William Kidde</span>
          </h1>
          <h2>Software Developer</h2>
          <div className="social">
            <a href="mailto:kgeorgewilliam60@gmail.com">
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

          <p className="paragraph">Whether you are looking to build a product, feature, or website, I have got the expertise to bring your vision to life. Take a look at my portfolio and experience to see what I can do. If you are impressed with what you see and have a coding project in mind, do not hesitate to get in touch with me.</p>
          <div className="home-btn">
            <NavLink to="../Contact" className="hire">Hire me</NavLink>
            <a href={Resume} download="Resume.pdf">
              <button type="button" className="hire-btn">Get Resume</button>
              {' '}
            </a>
          </div>
        </div>
        <div className="profile">
          <div className="profile-photo" />
        </div>
      </div>
      <ProjectsCard />
      <Footer />
    </>
  );
}
