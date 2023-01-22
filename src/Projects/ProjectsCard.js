import React from 'react';
import CardContainer from './ProjectsDetails';
import './Projects.css';

export default function ProjectsCard() {
  return (
    <div className="container">
      {CardContainer.map((value) => (
        <div
          className="card"
          key={value.title}
        >

          <h1>{value.title}</h1>
          <img src={value.imagesrc} alt="img" />
          <p>{value.desc}</p>
          <div className="project-btn">
            <a href={value.live} className="live btn">Live</a>
            <a href={value.source} className="live">Source</a>

          </div>
        </div>
      ))}
    </div>
  );
}
