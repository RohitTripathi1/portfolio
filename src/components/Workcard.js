import { NavLink } from "react-router-dom"
import "./Workcard.css"

import React from 'react'

const Workcard = () => {
  return (
    <div className="work-container">

    <h1 className="project-heading">Projects</h1>
    <div className="all-2-projects">
    <div className="project-container">
        <div className="project-card">
       <img src="https://beebom.com/wp-content/uploads/2021/05/1.-Weather-default-Windows1.1.jpg" alt="weatherimage"/>
       <h2 className="project-title">Project Title</h2>
       <div className="pro-details">
        <p>
            here ,, expalin in detail about your weather app
        </p>
        <div className="pro-btns">
            <NavLink to ="https://weatherandtime.netlify.app" className="btn">View</NavLink>

            <NavLink to ="https://weatherandtime.netlify.app" className="btn">Source</NavLink>
        </div>
       </div>
        </div>
    </div>

   

    <div className="project-container">

  
        <div className="project-card">
       <img src="https://beebom.com/wp-content/uploads/2021/05/1.-Weather-default-Windows1.1.jpg" alt="weatherimage"/>
       <h2 className="project-title">Project Title</h2>
       <div className="pro-details">
        <p>
            here ,, expalin in detail about your weather app
        </p>
        <div className="pro-btns">
            
        <NavLink to ="https://weatherandtime.netlify.app" className="btn">View</NavLink>

            <NavLink to ="https://weatherandtime.netlify.app" className="btn">Source</NavLink>
        </div>
       </div>
        </div>
    </div>
</div>
</div>


  )
}

export default Workcard
