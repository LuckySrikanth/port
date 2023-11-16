import React from 'react'
import Project from './project'
 
 
 const  ProjetDetails = [
    {
        id: 0,
        title: "Youtube Clone",
        date: "Jul 2023",
        description:
          "Experience MyTube, a React and Material-UI powered YouTube clone with personalized recommendations via RapidAPI. Explore, upload, and engage with a user-friendly interface and responsive design. Discover, watch, Search and share your favorite videos with ease. Tailor your video journey with MyTube today!",
        image:
          "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-rishav.appspot.com/o/Screenshot%20(151).png?alt=media&token=48391593-1ef0-4a8c-a92a-eb82bdf38e89",
        tags: ["React Js", "RapidApi", "MaterialUi"],
        github: "https://github.com/rishavchanda/Whatsapp-Clone-React-Js",
        webapp: "https://whatsapp-clone-rishav.web.app",
    }
]

const Details = () => {
  return (
    <div>
      {
        ProjetDetails.map(eachProject => (
          <Project key={eachProject.id} project={eachProject} />
        ))
      }
    </div>
  )
}

export default Details