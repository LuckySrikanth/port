import React from 'react'
import { SlBadge } from 'react-icons/sl';
import { PiStudentFill } from 'react-icons/pi';


import "./about.css"

const About = () => {
  return (
    <div className='about-container'>
      <p className='text'>Get To Know More</p>
      <h1>About Me</h1>
      <div className='container-2'>
        <div className='card'>
          <SlBadge className='badge' />
          <h3>Experience</h3>
          <p className='text'>9 Months</p>
          <p className='text'>FullStack Developer</p>
        </div>
        <div className='card'>
          <PiStudentFill className='badge' />
          <h3>Education</h3>
          <p className='text'>BCA- Bachelor Degree</p>
        </div>
      </div>
      <div className='about-section'>
        {/* <p>I am a motivated and versatile individual, always eager to take on new challenges. 
          With a passion for learning I am dedicated to delivering high-quality results. 
          With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
          As a results-driven professional, I thrive on challenges and continuous learning. <br/>My commitment to excellence
          fuels my work, and I approach each task with a growth-oriented mindset. <br />I'm here to drive meaningful contributions
          and achieve outstanding outcomes</p> */}
          <p className='about-paragraph'>I'm an adventurer with a passion for learning and delivering exceptional work. I approach life with a positive mindset and a drive to create and inspire.
          I'm an eager go-getter who loves a challenge and values continuous learning. I'm here to make a real impact and achieve awesome things.
          I'm a results-focused professional who thrives on challenges and lifelong learning. I'm dedicated to excellence, with a growth-oriented mindset, here to make meaningful contributions.
          </p>
      </div>
    </div>
  )
}

export default About