import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import ProjectsCard from './Projects/ProjectsCard';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/ProjectsCard" element={<ProjectsCard />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>

  );
}

export default App;
