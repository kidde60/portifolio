import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && clicked) {
        setClicked(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [clicked]);

  // Close mobile menu when route changes
  useEffect(() => {
    setClicked(false);
  }, [location]);

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <span className="logo-text">KGW</span>
          <div className="logo-dot"></div>
        </NavLink>

        <div className={`navbar-menu ${clicked ? "navbar-menu-active" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "navbar-link-active" : ""}`
            }
            onClick={() => setClicked(false)}
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "navbar-link-active" : ""}`
            }
            onClick={() => setClicked(false)}
          >
            <span>About</span>
          </NavLink>
          <NavLink
            to="/Projects"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "navbar-link-active" : ""}`
            }
            onClick={() => setClicked(false)}
          >
            <span>Projects</span>
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "navbar-link-active" : ""}`
            }
            onClick={() => setClicked(false)}
          >
            <span>Contact</span>
          </NavLink>
        </div>

        <button
          type="button"
          className={`navbar-toggle ${clicked ? "navbar-toggle-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
        </button>
      </div>

      {clicked && (
        <div className="navbar-overlay" onClick={() => setClicked(false)}></div>
      )}
    </nav>
  );
};

export default Navbar;
