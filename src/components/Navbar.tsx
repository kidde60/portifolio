import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-accent/20 m-2">
      <div className="mx-auto px-4 py-4 md:px-10 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-[#f6931b]"
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
                  isActive ? "text-accent" : "text-gray-300 hover:text-accent"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{
                    background: "linear-gradient(to right, #06b6d4, #f6931b)",
                  }}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-nav-btn text-white hover:text-accent transition-colors duration-300 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-nav-menu bg-secondary/80 backdrop-blur-md border-t border-accent/20 animate-slide-down">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-3 text-gray-300 hover:text-accent hover:bg-accent/10 transition-all duration-300 rounded-lg font-medium"
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
