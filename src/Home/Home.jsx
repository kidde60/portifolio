import React from "react";
import { NavLink } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ProjectsCard from "../Projects/ProjectsCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Home.css";
// import Resume from './Resume.pdf';
import Resume from "./GEORGE_WILLIAM KIDDE_Resume_02-11-2023-21-55-04.pdf";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home">
          <h1 className="coln">
            Hello, I am <br />
            <span className="span">George William Kidde</span>
          </h1>
          <h2>Software Developer</h2>
          <div className="social">
            <a href="mailto:kgeorgewilliam60@gmail.com">
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/kidde60"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/george-william-kidde/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/KGWilliam60"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://george-william-kidde-portifolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-globe" />
            </a>
          </div>

          <p className="paragraph">
            Whether you're building a product, feature, or full-scale website,
            I'm here to turn your ideas into reality. With a strong background
            in JavaScript, ReactJs, TypeScript and NodeJs, I specialize in
            creating solutions that not only meet your needs but exceed
            expectations. Explore my portfolio to discover how I bring projects
            to life. If my work resonates with you and you're ready to start
            your next coding project, feel free to reach out, let's build
            something amazing together.
          </p>

          <div className="home-btn">
            <NavLink to="../Contact" className="hire">
              Hire me
            </NavLink>
            <a href={Resume} download="Resume.pdf">
              <button type="button" className="hire-btn">
                Get Resume
              </button>{" "}
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
