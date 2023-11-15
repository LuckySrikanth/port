import React from 'react';
import { Chrono } from "react-chrono";

import react from "../../assets/tech/reactjs.png";
import nodeJs from "../../assets/tech/nodejs.png";
import mongoDB from "../../assets/tech/mongodb.png";
import git from "../../assets/tech/git.png";
import HTML from "../../assets/tech/html.png";
import JS from "../../assets/tech/javascript.png";
import Redux from "../../assets/tech/redux.png";
import tailwindCss from "../../assets/tech/tailwind.png";
import Github from "../../assets/github-sign.png";
import ExpressJs from "../../assets/tech/icons8-express-js-240.png";
import Python from "../../assets/tech/python.png";
import MySql from "../../assets/tech/mysql.png";
import GraphQl from "../../assets/tech/graphql.png";
import Bootstrap from "../../assets/tech/bootstrap.png";

import "./experiences.css"

const Experiences = () => {
  // const items = [{
  //   title: "FEB-23",
  //   cardTitle: "React & Full Stack Developer",
  //   url: "http://www.history.com",
  //   cardSubtitle:"Italent Appilcation private Limted ",
  //   cardDetailedText: "React,ExpressJs,NodeJs,MongoDB,MySQL,Python,TailwindCss",
  // },];

  const items = [
    {
      title: "FEB-23",
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://media.glassdoor.com/sql/803191/italent-corporation-squarelogo-1497942986763.png ',
        },
      },
      cardTitle: "React & Full Stack Developer",
      cardSubtitle: "Italent Appilcation private Limted ",
      cardDetailedText: "SKILLS: React,ExpressJs,NodeJs,MongoDB,MySQL,Python,TailwindCss,GraphQL,Redux",
    },
  ];

  return (
    <div className='Main-container'>
      <div>
        <h2 className='text'>Skills</h2>
        <div className='icons-card'>
          
          <img src={react} alt="React" className='icons' />
          <img src={nodeJs} alt="NodeJs" className='icons' />
          <img src={mongoDB} alt="MongoDB" className='icons' />
          <img src={MySql} alt='MySQL' className='icons' />
          <img src={Redux} alt="Redux" className='icons' />
          <img src={Github} alt="Github" className='icons' />
          <img src={Python} alt="pyhton" className='icons' />
          <img src={git} alt="Git" className='icons' />
          <img src={GraphQl} alt="graphQL" className='icons' />
          <img src={ExpressJs} alt='ExpressJs' className='icons' />
          <img src={JS} alt="Js" className='icons' />
          <img src={HTML} alt="HTML" className='icons' />
          <img src={tailwindCss} alt="TailwindCss " className='icons' />
          <img src={Bootstrap} alt="Bootstrap" className='icons' />
        </div>
      </div>
      <div>
        <h2 className='text'>Experiences</h2>
        <div style={{ width: '650px', height: '950px' }} className='experience-container'>
          <Chrono items={items} mode="VERTICAL" textOverlay />
        </div>
      </div>
    </div>
  )
}

export default Experiences