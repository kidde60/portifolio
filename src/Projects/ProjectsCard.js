import React from 'react';
import CardContainer from './ProjectsDetails';
import './Projects.css';

export default function ProjectsCard() {
  return (
    <div>
      <h1 className="project">PROJECTS</h1>
      <div className="container">
        {CardContainer.map((value) => (
          <div
            className="card"
            key={value.title}
          >

            <h1>{value.title}</h1>
            <img src={value.imagesrc} alt="img" />
            <p>{value.desc}</p>
            <h3>
              Built with :
              {value.build}
            </h3>
            <div className="project-btn">
              <a href={value.live} className="live" id="btn">Live</a>
              <a href={value.source} className="live">Source</a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
