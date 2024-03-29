import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_cuzw0r3', 'template_4c9mn2l', form.current, 'SM97kljcWNAOQG39c')
      .then(() => {
        // console.log(result.text);
      }, () => {
        // console.log(error.text);
      });
  };
  return (
    <>
      <Navbar />
      <div className="form-container">
        <div className="contact">
          <h1>Contact Me</h1>
          <p>
            I am interested in both remote and relocation jobs.
          </p>
          <p>
            Please contact me if you have any requests
            or questions.
          </p>
        </div>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <label htmlFor="fullname">
            Name
            <input type="text" name="user_name" placeholder="Enter your name..." required />
          </label>
          <label htmlFor="useremail">
            Email
            <input type="email" name="user_email" placeholder="Enter your email..." required />
          </label>
          <label htmlFor="usermessage">
            Message
            <textarea name="message" placeholder="Type your message...." required />
          </label>
          <input className="send" type="submit" value="Submit" />
        </form>
      </div>
      <Footer />
    </>
  );
}
