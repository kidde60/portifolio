import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function About() {
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

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 80 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 95 },
        { name: "React Native", level: 90 },
        { name: "Angular", level: 85 },
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      title: "Styling & UI",
      skills: [
        { name: "Tailwind CSS", level: 95 },
        { name: "Ant Design", level: 90 },
        { name: "Chakra UI", level: 88 },
        { name: "Bootstrap", level: 90 },
        { name: "Material UI", level: 80 },
        { name: "Styled Components", level: 85 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 65 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
      ],
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
      <section className="section-container min-h-[60vh] flex flex-col justify-center">
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="inline-block">
            <span className="text-accent text-lg font-semibold">
              👨‍💻 Full-Stack Developer
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold">About Me</h1>
          <p
            className={`text-2xl font-light ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}
          >
            Passionate Developer & Problem Solver
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="section-container">
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a{" "}
                <span className="text-accent font-semibold">
                  passionate full-stack developer
                </span>{" "}
                from Uganda and a proud graduate of
                <span className="text-accent font-semibold">
                  {" "}
                  Microverse's intensive software development program
                </span>
                . I specialize in building enterprise-grade systems that serve
                businesses across multiple countries.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                With professional experience at{" "}
                <span className="text-accent font-semibold">
                  Pinnisoft, Tek Juice, Tracecorp Solutions, 2ML Consultant, and
                  Dango Tech Solutions
                </span>
                , I create comprehensive web and mobile applications across{" "}
                <span className="text-accent font-semibold">
                  Uganda, South Sudan, Nigeria, and the UK
                </span>
                .
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <span className="text-gray-300">
                    Seeking Frontend Development Roles
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  <span className="text-gray-300">
                    Javascript & React Expertise
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="glass-effect p-6 text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-gray-400 mt-2">Systems Built</div>
              </div>
              <div className="glass-effect p-6 text-center">
                <div className="text-3xl font-bold text-accent">4</div>
                <div className="text-sm text-gray-400 mt-2">Countries</div>
              </div>
              <div className="glass-effect p-6 text-center">
                <div className="text-3xl font-bold text-accent">10K+</div>
                <div className="text-sm text-gray-400 mt-2">Active Users</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Cards */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass-effect p-8 hover:border-accent/50 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Enterprise Systems
              </h3>
              <p className="text-gray-400">
                Building scalable solutions for critical business operations
              </p>
            </div>

            <div className="glass-effect p-8 hover:border-accent/50 transition-all duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Global Impact
              </h3>
              <p className="text-gray-400">
                Serving businesses across 4 countries with modern technology
              </p>
            </div>

            <div className="glass-effect p-8 bg-accent/10 border-accent/50">
              <div className="text-5xl font-bold text-accent mb-2">10K+</div>
              <div className="text-gray-300">Active Users Daily</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="section-container">
        <motion.div variants={itemVariants} className="space-y-12">
          <h2 className="section-title">Technical Skills</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-accent text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent to-blue-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          variants={itemVariants}
          className="glass-effect p-12 md:p-16 text-center space-y-8"
        >
          <h2 className="text-4xl font-bold text-white">Let's Work Together</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and challenges. Let's
            connect and create something amazing!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
              <ArrowRight size={20} />
            </Link>
            <a href="#" className="btn btn-secondary">
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
