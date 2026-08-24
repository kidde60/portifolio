import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import shapeBg from "../assets/shape-bg.png";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:kgeorgewilliam60@gmail.com",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/kidde60",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/george-william-kidde/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/KGWilliam60",
    },
  ];

  return (
    <footer
      className={`mt-10 relative overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-secondary/50 border-t border-accent/20 text-white"
          : "bg-slate-200/50 border-t border-slate-300/20 text-slate-900"
      }`}
      style={{
        backgroundImage: `url(${shapeBg})`,
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan to-cyan-dark bg-clip-text text-transparent">
              George Kidde
            </h3>
            <p
              className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-slate-600"}`}
            >
              Full-Stack Enterprise Developer building scalable solutions across
              multiple countries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4
              className={`font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className={`transition-colors duration-300 text-sm ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-accent"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`transition-colors duration-300 text-sm ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-accent"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className={`transition-colors duration-300 text-sm ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-accent"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`transition-colors duration-300 text-sm ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-accent"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4
              className={`font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
            >
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={
                      link.name !== "Email" ? "noopener noreferrer" : undefined
                    }
                    className="p-2 glass-effect hover:bg-accent/20 transition-all duration-300"
                    aria-label={link.name}
                  >
                    <Icon size={20} className="text-cyan" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`my-8 ${
            theme === "dark"
              ? "border-t border-accent/20"
              : "border-t border-slate-300/20"
          }`}
        ></div>

        {/* Bottom Section */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center gap-4 text-sm ${
            theme === "dark" ? "text-gray-300" : "text-slate-600"
          }`}
        >
          <p>© {currentYear} George William Kidde. All rights reserved.</p>
          <p style={{ color: "#06b6d4" }}>
            Designed & Built with <span>❤️</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
