import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import shapeBg from "../assets/shape-bg.png";

export default function Footer() {
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
      className="bg-secondary/50 border-t border-accent/20 mt-10 text-white relative overflow-hidden"
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
            <h3 className="text-xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              George Kidde
            </h3>
            <p className="text-gray-300 text-sm">
              Full-Stack Enterprise Developer building scalable solutions across
              multiple countries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
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
                    <Icon size={20} className="text-accent" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          <p>© {currentYear} George William Kidde. All rights reserved.</p>
          <p style={{ color: "#f6931b" }}>
            Designed & Built with <span>❤️</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
