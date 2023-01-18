import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import Navbar from '../Navbar/Navbar';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cuzw0r3', 'template_4c9mn2l', form.current, 'SM97kljcWNAOQG39c')
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
            }, (error) => {
                console.log(error.text);
            });

    }
    return (
        <div className='form-container'>
            <Navbar />
            <div>
                <h1>Contact Me</h1>
            </div>
            <form className='form' ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" placeholder='Enter your name...' required />
                <label>Email</label>
                <input type="email" name="user_email" placeholder='Enter your email...' required />
                <label>Message</label>
                <textarea name="message" placeholder='Type your message....' required />
                <input className='send' type="submit" value="Submit" />
            </form>
        </div>
    )
}
