import "./Pricingcards.css"

import React from 'react'
import { Link } from "react-router-dom"
const Pricingcards = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
            <h3>-Freelancing Projects-</h3>
            <span className="bar"></span>
            <p className="btc">Rs 15000</p>
            <p>-30 days-</p>
            <p>-3 Websites-</p>
            <p>-Featured-</p>
            <p>-Responsive design-</p>
            <Link to="/contact" className="btn">Purchase Now</Link>
        </div>
      </div>
    </div>
  )
}

export default Pricingcards
