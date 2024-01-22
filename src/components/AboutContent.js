import "./AboutContentStyles.css" ; 

import React from 'react' ;
import { Link } from "react-router-dom" ;
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
      <h1> About my Technical skills !</h1>
     <p>In terms of technical skills i am proficient in Html , Css , JavaScript , Bootstrap , React Js , Next Js , Rest Api , Java , Python , MySql , Algorithms , Internet of things . Along with this i can work with softwares and code editors like Visual studio Code, Git , Github few stimulation tools like Lt Spice .</p>
     <Link to="/contact">
     <button className="btn">Contact</button>
      </Link>
      </div>

      <div className="right">
     <div className="img-container">

      <div className="img-stack top">
       <img src="https://media.istockphoto.com/id/1365543480/video/contact-us-concept.jpg?s=640x640&k=20&c=G16GzQ4uJKlITww2ArmKNB9UKb1-IT2eyJrUxkUmAIY=" alt="contactimage" className="img"/>
        
      </div>

      <div className="img-stack bottom">
       <img src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg=" alt="contactimage" className="img"/>
        
      </div>

     </div>
       
    
      </div>
    </div>
  )
}

export default AboutContent 
