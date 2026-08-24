import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Projects() {
  const { theme } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const projects = [
    {
      title: "Nyumbayo Rental Management System",
      description:
        "Comprehensive property rental management system with tenant tracking, payment processing, and maintenance scheduling for property managers across Uganda.",
      tech: ["React.js", "Node.js", "MongoDB", "Express"],
      image: "/src/Assets/Nyumbayo.png",
      live: "#",
      source: "#",
    },
    {
      title: "Enterprise Accounting System",
      description:
        "Full-featured accounting system with multi-currency support, invoice generation, and financial reporting for businesses in Uganda and Nigeria.",
      tech: ["React", "TypeScript", "PostgreSQL", "Node.js"],
      image: "/src/Assets/accounting.png",
      live: "#",
      source: "#",
    },
    {
      title: "Admin Dashboard",
      description:
        "Comprehensive admin dashboard with real-time analytics, user management, and system monitoring capabilities for enterprise applications.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      image: "/src/Assets/admin.png",
      live: "#",
      source: "#",
    },
    {
      title: "Water Billing System",
      description:
        "Smart IoT-integrated billing system for water utilities with real-time meter reading, automated billing, and customer management.",
      tech: ["Angular", "Ant Design", "Node.js", "PostgreSQL"],
      image: "/src/Assets/billing.png",
      live: "#",
      source: "#",
    },
    {
      title: "Hotel Management System",
      description:
        "Complete hotel management platform with room booking, guest management, billing, and housekeeping coordination.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/src/Assets/hotel.png",
      live: "#",
      source: "#",
    },
    {
      title: "HR Management System",
      description:
        "Comprehensive HR management system with employee records, payroll processing, leave management, and performance tracking.",
      tech: ["React", "TypeScript", "PostgreSQL", "Node.js"],
      image: "/src/Assets/hr.png",
      live: "#",
      source: "#",
    },
    {
      title: "CRM System",
      description:
        "Customer relationship management platform with lead tracking, sales pipeline management, and customer communication tools.",
      tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      image: "/src/Assets/crm.png",
      live: "#",
      source: "#",
    },
    {
      title: "Sales Management Platform",
      description:
        "Advanced sales management system with order tracking, inventory management, and real-time sales analytics.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      image: "/src/Assets/sales.png",
      live: "#",
      source: "#",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="section-container min-h-[50vh] flex flex-col justify-center">
        <motion.div variants={itemVariants} className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">My Projects</h1>
          <p
            className={`text-2xl font-light ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}
          >
            Building Digital Experiences
          </p>
          <p
            className={`text-lg max-w-2xl ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}
          >
            A collection of enterprise systems and applications I've built for
            businesses across multiple countries.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass-effect overflow-hidden hover:border-accent/50 transition-all duration-300 group flex flex-col cursor-pointer"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <h3
                  className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                >
                  {project.title}
                </h3>
                <p
                  className={`flex-1 ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  className={`border-t ${theme === "dark" ? "border-white/10" : "border-slate-300/20"}`}
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors duration-300 font-medium"
                  >
                    <ExternalLink size={18} />
                    <span>View Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Additional Info */}
      <section className="section-container">
        <motion.div
          variants={itemVariants}
          className="glass-effect p-12 md:p-16 space-y-8"
        >
          <h2
            className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            More About My Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl">🌍</div>
              <h3
                className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Global Reach
              </h3>
              <p
                className={
                  theme === "dark" ? "text-gray-400" : "text-slate-600"
                }
              >
                Built systems serving businesses across Uganda, South Sudan,
                Nigeria, and the UK with 10,000+ active users.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">⚙️</div>
              <h3
                className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Enterprise Scale
              </h3>
              <p
                className={
                  theme === "dark" ? "text-gray-400" : "text-slate-600"
                }
              >
                Developed 50+ enterprise systems handling critical business
                operations in finance, healthcare, and utilities.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">🚀</div>
              <h3
                className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Modern Tech
              </h3>
              <p
                className={
                  theme === "dark" ? "text-gray-400" : "text-slate-600"
                }
              >
                Expertise in React, TypeScript, Node.js, and modern development
                practices for scalable applications.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
