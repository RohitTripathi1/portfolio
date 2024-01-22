import { NavLink } from "react-router-dom"
import "./Workcard.css"

import React from 'react'

const Workcard = () => {
  return (
    <div className="work-container">

    <h1 className="project-heading">My Projects</h1>
    <div className="all-2-projects">
    <div className="project-container">
        <div className="project-card">
       <img src="https://beebom.com/wp-content/uploads/2021/05/1.-Weather-default-Windows1.1.jpg" alt="weatherimage"/>
       <h2 className="project-title"> &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;Weather and Time Website</h2>
       <div className="pro-details">
        <p>
           Tech Stacks used-: HTML , CSS , Bootstrap , Javascript , Rest Api <br></br>
            In this project we can view the weather and time of any city in world just by entering <br></br>the name of that respective city in the search box. Here i have fetched a free weather<br></br> rest api through which all the data is received . We can use this website just by clicking <br></br>below on the VIEW button . This website is hosted on netlify domain .
        </p>
        <div className="pro-btns">
            <NavLink to ="https://weatherandtime.netlify.app" className="btn" target="_blank">View</NavLink>

            {/* <NavLink to ="https://weatherandtime.netlify.app" className="btn">Source</NavLink> */}
        </div>
       </div>
        </div>
    </div>

   

    <div className="project-container">

  
        <div className="project-card">
       <img src="https://img.freepik.com/premium-vector/medical-healthcare-business-website-landing-page-ui-template-design_509521-14.jpg" alt="weatherimage"/>
       <h2 className="project-title">&nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;Healthcare Website</h2>
       <div className="pro-details">
        <p>
            Tech Stacks used-: HTML , CSS , Bootstrap <br></br>
            A Healthcare website whose aim was to connect doctors from all over the  world for online <br></br>  consultation .Also, a feature which is not yet added in this project is to integrate a AI chat bot .<br></br> Other feaures available in this website is that there are several pricing plans on purchasing  <br></br>which you can get several benefits as mentioned in the description box of the website <br></br> However the features as of now are non-functional
 
        </p>
        <div className="pro-btns">
            
        <NavLink to ="https://rohittripathi1.github.io/healthcare/#topics" className="btn" target="_blank">View</NavLink>

            {/* <NavLink to ="https://weatherandtime.netlify.app" className="btn">Source</NavLink> */}
        </div>
       </div>
        </div>
    </div>
</div>
</div>


  )
}

export default Workcard
