import React from 'react';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>

  );
}

export default App;
