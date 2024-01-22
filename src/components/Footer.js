import "./Footerstyle.css"

import React from 'react'
import { FaHome, FaLinkedin} from "react-icons/fa"
import {FaPhone} from "react-icons/fa"
import {FaMailBulk} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={
                {color:"#fff",
                marginRight: "2rem"}}/>
                <p>Shiv Nadar University , </p>
                <p>Greater Noida </p>
                <p>India</p>
          </div>
          <div className="phone">
           <h4> <FaPhone size={20} style={
                {color:"#fff",
                marginRight: "2rem"}}/>
                <p>9264936379</p> </h4>
       </div>  

       <div className="email">
           <h4> <FaMailBulk size={20} style={
                {color:"#fff",
                marginRight: "2rem"}}/>
                <p>rt264@snu.edu.in</p> </h4>
       </div>

       </div>
       


        <div className="right">
          <h4>About Me!!</h4>
          <p>HII !! I am Rohit tripathi , A third year B.tech student majoring in electronics and communication engineering . 
          I am a friendly web developer.  Also I enjoy discussing new projects and design challenges . Below are few of my profiles where you can connect with me </p>
          {/* <div className="social">
          <FaFacebook  size={30} style={
                {color:"#fff",
                marginRight: "1rem"}}/>

           <FaTwitter size={30} style={
                {color:"#fff",
                marginRight: "1rem"}}/>

          <FaLinkedin
           size={30} style={
                {color:"#fff",
                marginRight: "1rem"}}/>
          </div> */}
          <div className="social">
          <a href="https://github.com/RohitTripathi1" target="_blank" rel="noopener noreferrer">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRW69QLRlBQ6lRRjr8c-B2CP7IJ6p70GuqBg&usqp=CAU" style={{ width: 30, height: 30, marginRight: "1rem" }} />
  </a>
  

  <a href="https://leetcode.com/rohit_3001/" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png?f=webp" style={{ width: 30, height: 30, marginRight: "1rem" }} />
  </a>
  
  

  <a href="https://www.linkedin.com/in/rohit-tripathi-3a048a21b/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
  </a>
</div>

        </div>
      </div>
    </div>
  )
}

export default Footer
