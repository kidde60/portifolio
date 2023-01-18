import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import CardContainer from './CardContainer'
import ProjectCard from './ProjectCard'

export default function Projects() {
    return (
        <div>
            {/* <div className='none'>
                <NavLink to='../'>Home</NavLink>
                <Navbar />
            </div> */}
            <h1 className='heading'>Projects</h1>
            <div className='container'>
                {CardContainer.map((value, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            imagesrc={value.imagesrc}
                            title={value.title}
                            desc={value.desc}
                            live={value.live}
                            source={value.source}
                        />
                    )
                })}
            </div>
        </div>
    )
}
