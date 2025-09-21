import React, { useEffect, useRef } from "react";
import CardContainer from "./ProjectsDetails";
import "./Projects.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function ProjectsCard() {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-page">
      <Navbar />
      <div className="projects-hero">
        <h1 className="projects-title" ref={titleRef}>
          <span className="projects-title-main">My Projects</span>
          <span className="projects-title-sub">
            Building Digital Experiences
          </span>
        </h1>
      </div>

      <div className="projects-container" ref={containerRef}>
        {CardContainer.map((project, index) => (
          <div
            className="project-card"
            key={project.title}
            style={{ "--delay": `${index * 0.2}s` }}
          >
            <div className="project-image-container">
              <img
                src={project.imagesrc}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="project-links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-live"
                  >
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-source"
                  >
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.desc}</p>

              <div className="project-tech">
                {project.build.html && (
                  <span className="tech-tag">{project.build.html}</span>
                )}
                {project.build.bootstrap && (
                  <span className="tech-tag">{project.build.bootstrap}</span>
                )}
                {project.build.lags && (
                  <span className="tech-tag">{project.build.lags}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
