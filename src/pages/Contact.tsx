import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
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

  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (form.current) {
        await emailjs.sendForm(
          "service_cuzw0r3",
          "template_4c9mn2l",
          form.current,
          "SM97kljcWNAOQG39c",
        );
        setSubmitStatus("success");
        form.current.reset();
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kgeorgewilliam60@gmail.com",
      link: "mailto:kgeorgewilliam60@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Uganda (Open to Remote)",
      link: "#",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+256706586256",
      link: "tel:+256706586256",
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
          <h1
            className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Let's Work Together
          </h1>
          <p
            className={`text-2xl font-light ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}
          >
            Ready to bring your ideas to life
          </p>
          <p
            className={`text-lg max-w-2xl ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}
          >
            I'm always interested in new opportunities, whether it's a freelance
            project, full-time position, or just a chat about technology.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="section-container">
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2
                className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Get In Touch
              </h2>
              <p
                className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}
              >
                I'm always interested in new opportunities and challenges. Let's
                connect and create something amazing together!
              </p>
            </div>

            {/* Contact Items */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    href={item.link}
                    className="glass-effect p-6 flex items-start gap-4 hover:border-accent/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={
                          theme === "dark" ? "text-gray-400" : "text-slate-600"
                        }
                      >
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={itemVariants}
              className="glass-effect p-6 border-accent/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span
                  className={
                    theme === "dark" ? "text-gray-300" : "text-slate-700"
                  }
                >
                  Available for Projects
                </span>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="glass-effect p-8 md:p-12"
          >
            <h3
              className={`text-2xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
            >
              Send Me a Message
            </h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="user_name"
                  className={`block text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-slate-700"}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 bg-secondary/40 border border-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 bg-secondary/40 border border-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors duration-300"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello..."
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-secondary/40 border border-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-300">
                    Something went wrong. Please try again or email me directly.
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Links Section */}
      <section className="section-container">
        <motion.div
          variants={itemVariants}
          className="glass-effect p-12 md:p-16 text-center space-y-8"
        >
          <h2
            className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Connect With Me
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-slate-600"}`}
          >
            Follow me on social media to stay updated with my latest projects
            and insights.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="https://github.com/kidde60"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass-effect hover:bg-accent/20 transition-all duration-300 rounded-lg text-accent font-semibold"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/george-william-kidde/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass-effect hover:bg-accent/20 transition-all duration-300 rounded-lg text-accent font-semibold"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://twitter.com/KGWilliam60"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass-effect hover:bg-accent/20 transition-all duration-300 rounded-lg text-accent font-semibold"
            >
              <Twitter size={20} />
              Twitter
            </a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
