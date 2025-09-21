import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaGlobe,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaAward,
  FaUsers,
  FaGlobeAmericas,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiAntdesign,
} from "react-icons/si";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Home.css";
import Resume from "./GEORGE-WILLIAM-KIDDE-Resume.pdf";

// Project Images
import NyumbayoImage from "../Assets/Nyumbayo.png";
import AccountingImage from "../Assets/accounting.png";
import BillingImage from "../Assets/billing.png";

export default function Home() {
  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const achievementsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe sections (except hero and about sections)
    const refs = [profileRef, projectsRef, skillsRef, achievementsRef, ctaRef];
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    // Make hero and about sections visible immediately
    if (homeRef.current) {
      homeRef.current.classList.add("animate-in");
    }
    if (aboutRef.current) {
      aboutRef.current.classList.add("animate-in");
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home" ref={homeRef}>
          <h1 className="hero-title">
            <span className="greeting">Hello, I am</span>
            <span className="name">George William Kidde</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="typing-animation">
              Full-Stack Enterprise Developer
            </span>
          </h2>

          <p className="hero-description">
            Building scalable enterprise systems across Uganda, South Sudan,
            Nigeria, and the UK. Specializing in React, TypeScript, Angular, and
            React Native applications.{" "}
            <span className="highlight">
              Currently seeking new opportunities
            </span>{" "}
            in frontend development.
          </p>

          <div className="social-links">
            <a
              href="mailto:kgeorgewilliam60@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/kidde60"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/george-william-kidde/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/KGWilliam60"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>

          <div className="cta-buttons">
            <NavLink to="/Contact" className="btn btn-primary">
              <FaRocket />
              <span>Hire Me</span>
            </NavLink>
            <a
              href={Resume}
              download="George_William_Kidde_Resume.pdf"
              className="btn btn-secondary"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        <div className="profile-section" ref={profileRef}>
          <div className="profile-container">
            <div className="profile-photo">
              <div className="profile-glow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="home-about-section" ref={aboutRef}>
        <div className="section-container">
          <h2 className="section-title">Who I Am</h2>
          <div className="">
            <div className="about-text">
              <p>
                I'm a{" "}
                <span className="highlight">
                  passionate full-stack developer
                </span>{" "}
                from Uganda and a graduate of{" "}
                <span className="highlight">
                  Microverse's intensive software development program
                </span>
                . I specialize in building enterprise-grade systems that serve
                businesses across multiple countries, creating{" "}
                <span className="highlight">scalable solutions</span> that drive
                real business impact.
              </p>
              <p>
                With professional experience at companies including{" "}
                <span className="highlight">
                  Pinnisoft, Tek Juice, Tracecorp Solutions, 2ML Consultant
                  Limited, and Dango Tech Solutions
                </span>
                , I've built comprehensive web and mobile applications for
                individuals, organizations, and enterprises across Uganda, South
                Sudan, Nigeria, and the UK.
              </p>
              <p>
                My expertise spans{" "}
                <span className="highlight">full-stack development</span> from
                frontend user interfaces to backend systems and databases,
                serving thousands of users in finance, healthcare, utilities,
                legal, and event management industries. I'm currently{" "}
                <span className="highlight">seeking new opportunities</span>,
                particularly in{" "}
                <span className="highlight">frontend development</span> roles.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <FaCode />
                </div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Systems Built</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <FaGlobeAmericas />
                </div>
                <div className="stat-number">4</div>
                <div className="stat-label">Countries Served</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <FaUsers />
                </div>
                <div className="stat-number">10K+</div>
                <div className="stat-label">Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="home-projects-section" ref={projectsRef}>
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="home-projects-grid">
            <div className="home-project-card">
              <div className="project-image">
                <img
                  src={NyumbayoImage}
                  alt="Nyumbayo Rental Management System"
                />
                <div className="project-overlay">
                  <div className="project-tech">
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">MongoDB</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Nyumbayo Rental Management</h3>
                <p>
                  Comprehensive property rental management system with tenant
                  tracking, payment processing, and maintenance scheduling for
                  property managers
                </p>
                <div className="project-links">
                  <a href="#" className="project-link">
                    Live Demo
                  </a>
                  <a href="#" className="project-link">
                    Source
                  </a>
                </div>
              </div>
            </div>

            <div className="home-project-card">
              <div className="project-image">
                <img src={AccountingImage} alt="Enterprise Accounting System" />
                <div className="project-overlay">
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">TypeScript</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Enterprise Accounting</h3>
                <p>
                  Full accounting system with multi-currency support for Uganda
                  & Nigeria
                </p>
                <div className="project-links">
                  <a href="#" className="project-link">
                    Live Demo
                  </a>
                  <a href="#" className="project-link">
                    Source
                  </a>
                </div>
              </div>
            </div>

            <div className="home-project-card">
              <div className="project-image">
                <img src={BillingImage} alt="Water Billing System" />
                <div className="project-overlay">
                  <div className="project-tech">
                    <span className="tech-tag">Angular</span>
                    <span className="tech-tag">Ant Design</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Water Billing System</h3>
                <p>
                  Smart IoT-integrated billing for water utilities across Uganda
                </p>
                <div className="project-links">
                  <a href="#" className="project-link">
                    Live Demo
                  </a>
                  <a href="#" className="project-link">
                    Source
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-cta">
            <NavLink to="/Projects" className="btn btn-primary btn-large">
              <span>View All Projects</span>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="home-skills-section" ref={skillsRef}>
        <div className="section-container">
          <h2 className="section-title">Technologies I Use</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <div className="tech-icons">
                <div className="tech-icon">
                  <FaReact />
                  <span>React</span>
                </div>
                <div className="tech-icon">
                  <FaAngular />
                  <span>Angular</span>
                </div>
                <div className="tech-icon">
                  <SiTypescript />
                  <span>TypeScript</span>
                </div>
                <div className="tech-icon">
                  <SiJavascript />
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="tech-icons">
                <div className="tech-icon">
                  <FaNodeJs />
                  <span>Node.js</span>
                </div>
                <div className="tech-icon">
                  <FaDatabase />
                  <span>APIs</span>
                </div>
                <div className="tech-icon">
                  <SiMongodb />
                  <span>MongoDB</span>
                </div>
                <div className="tech-icon">
                  <SiPostgresql />
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Mobile & UI Frameworks</h3>
              <div className="tech-icons">
                <div className="tech-icon">
                  <FaMobile />
                  <span>React Native</span>
                </div>
                <div className="tech-icon">
                  <SiTailwindcss />
                  <span>Tailwind CSS</span>
                </div>
                <div className="tech-icon">
                  <SiAntdesign />
                  <span>Ant Design</span>
                </div>
                <div className="tech-icon">
                  <FaCode />
                  <span>Chakra UI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section" ref={achievementsRef}>
        <div className="section-container">
          <h2 className="section-title">Achievements & Impact</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <FaAward className="achievement-icon" />
              <h3>Microverse Graduate</h3>
              <p>
                Completed intensive full-stack software development program with
                focus on collaborative remote development and modern
                technologies.
              </p>
            </div>
            <div className="achievement-card">
              <FaUsers className="achievement-icon" />
              <h3>Multi-Company Experience</h3>
              <p>
                Professional experience across 5+ companies including Pinnisoft,
                Tek Juice, Tracecorp Solutions, and 2ML Consultant Limited.
              </p>
            </div>
            <div className="achievement-card">
              <FaGlobeAmericas className="achievement-icon" />
              <h3>International Developer</h3>
              <p>
                Built enterprise systems used across 4 countries with 10,000+
                active users in critical business operations through various
                company partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="home-cta-section" ref={ctaRef}>
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Let's Work Together!</h2>
            <p className="cta-description">
              I'm actively seeking new opportunities, especially in frontend
              development roles. Available for freelance projects, contract
              work, and full-time positions. Let's discuss how I can contribute
              to your team's success.
            </p>
            <div className="cta-buttons-large">
              <NavLink to="/Contact" className="btn btn-primary btn-large">
                <FaEnvelope />
                <span>Get In Touch</span>
              </NavLink>
              <NavLink to="/Projects" className="btn btn-secondary btn-large">
                <span>View All Projects</span>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
