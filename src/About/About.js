import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './About.css'

export default function
    () {
    return (
        <div className='about'>
            <Navbar />
            <h1 className='desc'> I'm a web developer who loves learning new skills and put my knowledge into building projects.

                I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
            </h1>
            <div className='home-btn'>
                <NavLink to='../Contact' className='hire-btn hire'>Hire me</NavLink>
                <a href='Resume.pdf' download='Resume.pdf'><button className='hire-btn hire'>Get Resume</button> </a>
            </div>

        </div>


    )
}
