import React from 'react'
import img from "./IMG_1141.JPG";
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

import "./intro.css"

const Intro = () => {
  return (
    <div className='intro-container'>

      <div className='image-container'>
        <img src={img} alt='IMG' className='img' />
      </div>
      <div className='intro-content'>
        <p className='helo'>Hello I'm</p>
        <h1 className='my-name'>Srikanth Banoth</h1>
        <h2 className='role'>Full Stack Developer</h2>
        <div className='dc-container'>
          <a href={img} download="CV" target='_blank' rel='noreferrer'>
            <button className='download-btn'>Download CV</button>
          </a>
          <button className='contact-info-btn'>Contact Info</button>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/srikanth-banoths/' className='linkdn-an' target='_blank' rel="noreferrer"><BsLinkedin className='linkdn-icon'/></a>
          <a href='https://github.com/LuckySrikanth/LuckySrikanth' className='linkdn-an' target='_blank' rel="noreferrer"><AiFillGithub className='linkdn-icon'/></a>
        </div>
      </div>
    </div>

  )
}

export default Intro