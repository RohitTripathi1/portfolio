import React from 'react'
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Pricingcards from '../components/Pricingcards';
import Workcard from '../components/Workcard';
const Project = () => {
  return (
    <div>
    <Navbar/>
    <Heroimg2 heading="Projects" text="Some of my most recent works"/>
    <Workcard/>
    <Pricingcards/>
    <Footer/>
    </div>
  )
};

export default Project;
