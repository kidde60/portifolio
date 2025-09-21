import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./About.css";
import Resume from "../Home/GEORGE_WILLIAM KIDDE_Resume_02-11-2023-21-55-04.pdf";

export default function About() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");

          // If it's the skills section, also animate the container inside
          if (entry.target.classList.contains("skills-section")) {
            const container = entry.target.querySelector(".skills-container");
            if (container) {
              container.classList.add("animate-in");
            }
          }
        }
      });
    }, observerOptions);

    // Make about section visible immediately
    if (aboutRef.current) {
      aboutRef.current.classList.add("animate-in");
    }

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = {
    languages: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 80 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "SQL", level: 85 },
    ],
    frameworks: [
      { name: "React.js", level: 95 },
      { name: "React Native", level: 90 },
      { name: "Angular", level: 85 },
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "Next.js", level: 80 },
    ],
    styling: [
      { name: "Tailwind CSS", level: 95 },
      { name: "Ant Design", level: 90 },
      { name: "Chakra UI", level: 88 },
      { name: "Bootstrap", level: 90 },
      { name: "Material UI", level: 80 },
      { name: "Styled Components", level: 85 },
    ],
    tools: [
      { name: "Git & GitHub", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 65 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="about-hero">
          <div className="about-content" ref={aboutRef}>
            <div className="about-layout">
              <div className="about-left">
                <div className="about-badge">
                  <span className="badge-icon">👨‍💻</span>
                  <span className="badge-text">Full-Stack Developer</span>
                </div>

                <h1 className="about-title">
                  <span className="about-title-main">About Me</span>
                  <span className="about-title-sub">
                    Passionate Developer & Problem Solver
                  </span>
                </h1>

                <div className="about-description">
                  <p className="about-text">
                    I'm a{" "}
                    <span className="highlight">
                      passionate full-stack developer
                    </span>{" "}
                    from Uganda and a proud graduate of{" "}
                    <span className="highlight">
                      Microverse's intensive software development program
                    </span>
                    . I specialize in building enterprise-grade systems that
                    serve businesses across multiple countries.
                  </p>

                  <p className="about-text">
                    With professional experience at{" "}
                    <span className="highlight">
                      Pinnisoft, Tek Juice, Tracecorp Solutions, 2ML Consultant,
                      and Dango Tech Solutions
                    </span>
                    , I create comprehensive web and mobile applications across{" "}
                    <span className="highlight">
                      Uganda, South Sudan, Nigeria, and the UK
                    </span>
                    .
                  </p>

                  <div className="about-focus">
                    <div className="focus-item">
                      <span className="focus-icon">🎯</span>
                      <span className="focus-text">
                        Seeking Frontend Development Roles
                      </span>
                    </div>
                    <div className="focus-item">
                      <span className="focus-icon">⚡</span>
                      <span className="focus-text">
                        Javascript & React Expertise
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-right">
                <div className="about-visual">
                  <div className="visual-card primary-card">
                    <div className="card-icon">🚀</div>
                    <div className="card-content">
                      <h3 className="card-title">Enterprise Systems</h3>
                      <p className="card-desc">
                        Building scalable solutions for critical business
                        operations
                      </p>
                    </div>
                  </div>

                  <div className="visual-card secondary-card">
                    <div className="card-icon">🌍</div>
                    <div className="card-content">
                      <h3 className="card-title">Global Impact</h3>
                      <p className="card-desc">
                        Serving businesses across 4 countries with modern
                        technology
                      </p>
                    </div>
                  </div>

                  <div className="stats-highlight">
                    <div className="highlight-number">10K+</div>
                    <div className="highlight-label">Active Users Daily</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-stats-section">
              <div className="stats-container">
                <div className="stat-card">
                  <div className="stat-icon">📊</div>
                  <div className="stat-content">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Enterprise Systems Built</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🌐</div>
                  <div className="stat-content">
                    <span className="stat-number">4</span>
                    <span className="stat-label">Countries Served</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">👥</div>
                  <div className="stat-content">
                    <span className="stat-number">10K+</span>
                    <span className="stat-label">Active Users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section" ref={skillsRef}>
          <div className="skills-container">
            <h2 className="skills-title">Technical Skills</h2>

            <div className="skills-grid">
              <div className="skill-category">
                <h3 className="category-title">Languages</h3>
                <div className="skills-list">
                  {skills.languages.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="skill-item"
                      style={{ "--delay": `${index * 0.1}s` }}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ "--progress": `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Frameworks & Libraries</h3>
                <div className="skills-list">
                  {skills.frameworks.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="skill-item"
                      style={{ "--delay": `${index * 0.1}s` }}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ "--progress": `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Styling & UI</h3>
                <div className="skills-list">
                  {skills.styling.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="skill-item"
                      style={{ "--delay": `${index * 0.1}s` }}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ "--progress": `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Tools & Technologies</h3>
                <div className="skills-list">
                  {skills.tools.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="skill-item"
                      style={{ "--delay": `${index * 0.1}s` }}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ "--progress": `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-actions">
          <NavLink to="/Contact" className="btn btn-primary">
            <span>Let's Work Together</span>
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
      <Footer />
    </>
  );
}
