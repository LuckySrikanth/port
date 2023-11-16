import React from 'react';
import "./project.css";

const Project = ({project}) => {
  console.log(project);
  return (
    <div>
      <h1 className='project-text'>Projects</h1>
      <div className='projects-container'>
        <div className='project-card'>
          <img alt={project.image}/>
          <h3>{project.title}</h3>
          <p>{project.date}</p>
          <p>Skills: {project.tags}</p>
          <p>GitHub: <a href={project.github}>{project.title}</a> </p>
        </div>
        </div>
      </div>
  )
}

export default Project