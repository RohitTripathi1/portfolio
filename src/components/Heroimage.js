import "./Herostyle.css";

import React from 'react'
import introimg from "../assets/introimg.webp";
import { Link } from "react-router-dom";
const Heroimage = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="into-img" src={introimg} alt="introimage" />
    </div>
     <div className="content">
        <p>Hii, I'm a Freelancer</p>
        <h1>React Developer</h1>
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
     </div>
    </div>
  );
};

export default Heroimage;
