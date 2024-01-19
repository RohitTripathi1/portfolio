import "./Footerstyle.css"

import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaTwitter} from "react-icons/fa"
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
                <p>123 Housing Society.</p>
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
                <p>rohtripathi697@gmail.com</p> </h4>
       </div>

       </div>
       


        <div className="right">
          <h4>About the Company</h4>
          <p>HII !! this is me rohit tripathi . Founder and ceo of comapany , i enjoy discussing new projects and design challenges</p>
          <div className="social">
          <FaFacebook size={30} style={
                {color:"#fff",
                marginRight: "1rem"}}/>

           <FaTwitter size={30} style={
                {color:"#fff",
                marginRight: "1rem"}}/>

          <FaLinkedin
           size={30} style={
                {color:"#fff",
                marginRight: "1rem"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
