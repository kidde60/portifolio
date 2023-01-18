import React from 'react'
import './Projects.css'

export default function ProjectCard(props) {
    return (
        <div className='card'>
            <h1>{props.title}</h1>
            <img src={props.imagesrc} alt='img' />
            <p>{props.desc}</p>
            <div className='project-btn'>
                <a href={props.live} className='live btn'>Live</a>
                <a href={props.source} className='live'>Source</a>

            </div>
        </div>
    )
}
