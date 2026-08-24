import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 glass-effect border-b m-2 transition-colors duration-300 ${
        theme === "dark" ? "border-accent/20" : "border-slate-300/20"
      }`}
    >
      <div className="mx-auto px-4 py-4 md:px-10 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-cyan to-cyan-dark bg-clip-text text-transparent"
          onClick={handleLinkClick}
        >
          George William Kidde
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-nav gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-300 font-medium relative group ${
                  isActive
                    ? theme === "dark"
                      ? "text-accent"
                      : "text-slate-900"
                    : theme === "dark"
                      ? "text-gray-300 hover:text-accent"
                      : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{
                    background: "linear-gradient(to right, #06b6d4, #0891b2)",
                  }}
                ></span>
              </Link>
            );
          })}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              theme === "dark"
                ? "bg-white/10 hover:bg-white/20 text-accent"
                : "bg-slate-900/10 hover:bg-slate-900/20 text-slate-900"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex gap-2 items-center">
          <button
            onClick={toggleTheme}
            className={`mobile-nav-btn p-2 rounded-lg transition-colors duration-300 ${
              theme === "dark"
                ? "bg-white/10 hover:bg-white/20 text-accent"
                : "bg-slate-900/10 hover:bg-slate-900/20 text-slate-900"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className={`mobile-nav-btn transition-colors duration-300 p-2 ${
              theme === "dark"
                ? "text-white hover:text-accent"
                : "text-slate-900 hover:text-slate-700"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`mobile-nav-menu backdrop-blur-md border-t animate-slide-down ${
            theme === "dark"
              ? "bg-secondary/80 border-accent/20"
              : "bg-slate-100/80 border-slate-300/20"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 transition-all duration-300 rounded-lg font-medium ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-accent hover:bg-accent/10"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-900/10"
                }`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
