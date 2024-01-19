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

        
      </div>

     </div>
       
    
      </div>
    </div>
  )
}

export default AboutContent
