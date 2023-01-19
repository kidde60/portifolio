import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter, FaGlobe } from "react-icons/fa";
// import Typical from 'react-typical';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import Projects from '../Projects/Projects';
import { NavLink } from 'react-router-dom';

export default function
    () {
    return (
        <>
            <Navbar />
            <div className='home-container'>
                <div className='home'>
                    <h1 className='coln'>Hello, I'M <span className='name'>George William Kidde</span></h1>
                    <div className='social'>

                        <a href='https://kgeorgewilliam60@gmail.com'><FaEnvelope /></a>
                        <a href='https://github.com/kidde60'><FaGithub /></a>
                        <a href='https://www.linkedin.com/in/kidde-george-william/'><FaLinkedinIn /></a>
                        <a href='https://twitter.com/KGWilliam60'><FaTwitter /></a>
                        <a href=''><FaGlobe /></a>






                    </div>
                    {/* <div className='primary-text'>
                        {' '}
                        <h1>
                            {' '}
                            <Typical
                                loop={Infinity}
                                steps={[
                                    'Software developer', 2000,
                                    'Frontend developer', 2000,
                                    'JavaScript developer', 2000,
                                    'React js developer', 2000
                                ]}
                            />
                        </h1>
                    </div> */}
                    <p className='paragraph'>I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don't hestiate to contact me.</p>
                    <div className='home-btn'>
                        <NavLink to='../Contact' className='hire'>Hire me</NavLink>
                        <a href='Resume.pdf' download='Resume.pdf'><button className='hire-btn'>Get Resume</button> </a>
                    </div>
                </div>
                <div className='profile'>
                    <div className='profile-photo'>

                    </div>
                </div>
            </div>
            <Projects />
        </>
    )
}
