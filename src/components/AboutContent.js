import "./AboutContentStyles.css" ; 

import React from 'react' ;
import { Link } from "react-router-dom" ;
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
      <h1> hello who am i </h1>
     <p>I m a react frontend developer ,, i create responsive secure design for my clients</p>
     <Link to="/contact">
     <button className="btn">Contact</button>
      </Link>
      </div>

      <div className="right">
     <div className="img-container">

      <div className="img-stack top">
       <img src="https://cdn.dribbble.com/users/6581487/screenshots/15644169/media/8a500a71232dc2910441e77ab01360cc.png?resize=400x0" alt="contactimage" className="image"/>
        
      </div>

      <div className="img-stack bottom">
       <img src="https://media.istockphoto.com/id/1365543480/video/contact-us-concept.jpg?s=640x640&k=20&c=G16GzQ4uJKlITww2ArmKNB9UKb1-IT2eyJrUxkUmAIY=" alt="contactimage" className="image"/>
        
      </div>

     </div>
       
    
      </div>
    </div>
  )
}

export default AboutContent
