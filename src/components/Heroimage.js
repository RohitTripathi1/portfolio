import "./Herostyle.css";

import React from 'react'

import { Link } from "react-router-dom";
const Heroimage = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="into-img" src="https://uploads-ssl.webflow.com/5e9aa66fd3886aa2b4ec01ca/656542eae3674ef944805d5d_make%20money%20hacking.webp" alt="introimage" />
    </div>
     <div className="content">
        <p>Hii!! <br></br>I am Rohit</p>
        <h1>React Developer</h1>
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
     </div>
    </div>
  );
};

export default Heroimage;
