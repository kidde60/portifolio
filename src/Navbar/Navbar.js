import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600 && clicked) {
        setClicked(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [clicked]);

  return (

    <div>
      <nav id="navbar">
        <NavLink to="../" className="logo">KGW</NavLink>
        <div id="nav-list" className={clicked ? '#nav-list active' : '#nav-list'}>
          <NavLink to="../">Home</NavLink>
          <NavLink to="../About">About</NavLink>
          <NavLink to="../Projects">Projects</NavLink>
          <NavLink to="../Contact">Contact</NavLink>
        </div>
      </nav>
      <button type="button" id="mobile" onClick={() => setClicked(!clicked)}>
        <i id="bars" className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
      </button>
    </div>
  );
};
export default Navbar;
