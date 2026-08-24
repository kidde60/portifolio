import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowRight,
  Code2,
  Globe,
  Users,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import profileImg from "../assets/profile.jpeg";
import nyumbayoImg from "../assets/Nyumbayo.png";
import accountingImg from "../assets/accounting.png";
import billingImg from "../assets/billing.png";

export default function Home() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
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

  const heroImageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      transition: { duration: 0.3 },
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
      title: "Nyumbayo Rental Management",
      description:
        "Comprehensive property rental management system with tenant tracking, payment processing, and maintenance scheduling",
      tech: ["React.js", "Node.js", "MongoDB"],
      image: nyumbayoImg,
    },
    {
      title: "Enterprise Accounting System",
      description:
        "Full accounting system with multi-currency support for Uganda & Nigeria",
      tech: ["React", "TypeScript", "PostgreSQL"],
      image: accountingImg,
    },
    {
      title: "Water Billing System",
      description:
        "Smart IoT-integrated billing for water utilities across Uganda",
      tech: ["Angular", "Ant Design", "Node.js"],
      image: billingImg,
    },
  ];

  const stats = [
    { number: "50+", label: "Systems Built", icon: Code2 },
    { number: "4", label: "Countries Served", icon: Globe },
    { number: "10K+", label: "Active Users", icon: Users },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="section-container min-h-[90vh] flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent text-lg font-semibold">Hello, I am</p>
              <h1
                className="text-5xl md:text-7xl font-bold"
                style={{ color: "#06b6d4" }}
              >
                George William Kidde
              </h1>
            </div>

            <h2
              className={`text-2xl md:text-4xl font-light ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}
            >
              Full-Stack Enterprise Developer
            </h2>

            <p
              className={`text-lg max-w-2xl leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}
            >
              Building scalable enterprise systems across Uganda, South Sudan,
              Nigeria, and the UK. Specializing in React, TypeScript, Angular,
              and React Native applications.
              <span className="text-accent font-semibold">
                {" "}
                Currently seeking new opportunities
              </span>{" "}
              in frontend development.
            </p>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <a
                href="mailto:kgeorgewilliam60@gmail.com"
                className="p-3 glass-effect hover:bg-accent/20 transition-all duration-300"
              >
                <Mail size={24} className="text-accent" />
              </a>
              <a
                href="https://github.com/kidde60"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect hover:bg-accent/20 transition-all duration-300"
              >
                <Github size={24} className="text-accent" />
              </a>
              <a
                href="https://www.linkedin.com/in/george-william-kidde/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect hover:bg-accent/20 transition-all duration-300"
              >
                <Linkedin size={24} className="text-accent" />
              </a>
              <a
                href="https://twitter.com/KGWilliam60"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect hover:bg-accent/20 transition-all duration-300"
              >
                <Twitter size={24} className="text-accent" />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4 flex-wrap"
            >
              <Link to="/contact" className="btn btn-primary">
                <span>Hire Me</span>
                <ArrowRight size={20} />
              </Link>
              <a href="#" className="btn btn-secondary">
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Animated Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center items-center"
          >
            {/* Profile Image */}
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.img
                src={profileImg}
                alt="George William Kidde"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-accent shadow-2xl"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.3,
                }}
              />
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-accent/20 blur-2xl -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container">
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-8 text-center hover:bg-accent/10 transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <div
                  className={`text-4xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                >
                  {stat.number}
                </div>
                <div
                  className={
                    theme === "dark" ? "text-gray-400" : "text-slate-600"
                  }
                >
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="section-container">
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="section-title">Who I Am</h2>
          <div className="glass-effect p-8 md:p-12 space-y-6">
            <p
              className={`text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}
            >
              I'm a{" "}
              <span className="text-accent font-semibold">
                passionate full-stack developer
              </span>{" "}
              from Uganda and a graduate of
              <span className="text-accent font-semibold">
                {" "}
                Microverse's intensive software development program
              </span>
              . I specialize in building enterprise-grade systems that serve
              businesses across multiple countries, creating
              <span className="text-accent font-semibold">
                {" "}
                scalable solutions
              </span>{" "}
              that drive real business impact.
            </p>
            <p
              className={`text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}
            >
              With professional experience at companies including{" "}
              <span className="text-accent font-semibold">
                Pinnisoft, Tek Juice, Tracecorp Solutions, 2ML Consultant
                Limited, and Dango Tech Solutions
              </span>
              , I've built comprehensive web and mobile applications for
              individuals, organizations, and enterprises across Uganda, South
              Sudan, Nigeria, and the UK.
            </p>
            <Link
              to="/about"
              className="flex gap-2 items-center w-fit btn btn-primary mt-6"
            >
              Learn More About Me
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="section-container">
        <motion.div variants={itemVariants} className="space-y-12">
          <h2 className="section-title">Featured Projects</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="glass-effect overflow-hidden hover:border-accent/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="h-48 overflow-hidden bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3
                    className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={
                      theme === "dark" ? "text-gray-400" : "text-slate-600"
                    }
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-primary">
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          variants={itemVariants}
          className="glass-effect p-12 md:p-16 text-center space-y-8"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Let's Work Together!
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}
          >
            I'm actively seeking new opportunities, especially in frontend
            development roles. Available for freelance projects, contract work,
            and full-time positions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
              <Mail size={20} />
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              View Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
