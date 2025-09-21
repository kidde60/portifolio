import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        "service_cuzw0r3",
        "template_4c9mn2l",
        form.current,
        "SM97kljcWNAOQG39c"
      );
      setSubmitStatus("success");
      form.current.reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-hero">
          <h1 className="contact-title">
            <span className="contact-title-main">Let's Work Together</span>
            <span className="contact-title-sub">
              Ready to bring your ideas to life
            </span>
          </h1>
        </div>

        <div className="contact-container" ref={contactRef}>
          <div className="contact-info">
            <div className="contact-intro">
              <h2>Get In Touch</h2>
              <p>
                I'm always interested in new opportunities, whether it's a
                freelance project, full-time position, or just a chat about
                technology. Let's connect!
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>kgeorgewilliam60@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h3>Location</h3>
                  <p>Uganda (Open to Remote)</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <p>+256706586256</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaCheckCircle />
                </div>
                <div className="contact-text">
                  <h3>Availability</h3>
                  <p>Available for Projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <h3>Send Me a Message</h3>

              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello..."
                  rows="6"
                  required
                />
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                <span className="btn-text">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <FaPaperPlane className="btn-icon" />
              </button>

              {submitStatus === "success" && (
                <div className="status-message success">
                  <FaCheckCircle />
                  <span>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="status-message error">
                  <span>
                    Something went wrong. Please try again or email me directly.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
