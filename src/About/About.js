import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './About.css';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about">

        <h1>About me</h1>
        <div className="desc">
          <p>
            Iam a web developer who loves learning new skills and put my
            knowledge into building projects.
            I can help you build a product , feature or website Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, do not hestiate to contact me.
          </p>
          <p>
            I am currently looking for new opportunities in the industry and
            am willing to work on challenging and diverse
            projects using the latest technologies, frameworks, and languages.

          </p>
          <p>
            Reach out to me if you need a project built. Check out some of my technologies,
            frameworks, and languages I use to build projects below.
          </p>
        </div>
        <div className="stack">
          <h1>My stack</h1>
          <div className="tech">
            <div className="skills">
              <h2>Languages</h2>
              <ul className="list">
                <li>JavaScript</li>
                <li>React js</li>
                <li>MySQL</li>
                <li>Postgresql</li>
                <li>Ruby</li>
                <li>Rails</li>
                <li>Html</li>
                <li>Css</li>
              </ul>
            </div>
            <div className="skills">
              <h2>Frameworks</h2>
              <ul className="list">
                <li>Bootstrap</li>
                <li>Ruby on Rails</li>
                <li>RSPec</li>
                <li>CapyBara</li>
                <li>Selenium</li>
              </ul>
            </div>
            <div className="skills">
              <h2>Skills</h2>
              <ul className="list">
                <li>Git</li>
                <li>Github</li>
                <li>Codepen</li>
                <li>Terminal</li>
                <li>TDD</li>
                <li>Jest</li>
                <li>Netlify</li>
                <li>GitHub Pages</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about-btn">
          <NavLink to="../Contact" className="hire-btn hire">Hire me</NavLink>
          <a href="Resume.pdf" download="Resume.pdf">
            <button type="button" className="hire-btn hire">Get Resume</button>
            {' '}
          </a>
        </div>

      </div>
      <Footer />
    </>
  );
}
