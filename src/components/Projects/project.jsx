import React from 'react'
import "./project.css"

const Project = () => {
  return (
    <div>
      <h1 className='project-text'>Projects</h1>
      <div className='projects-container'>
        <div className='project-card'>
          <p>p1</p>
        </div>
        <div className='project-card'>
          <p>p2</p>
        </div>
        <div className='project-card'>
          <p>p3</p>
        </div>
        <div className='project-card'>
          <p>p4</p>
        </div>
      </div>
    </div>
  )
}

export default Project