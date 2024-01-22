import React from 'react';
import Navbar from '../components/Navbar';
import Heroimage from "../components/Heroimage";
import Footer from '../components/Footer';
import Workcard from '../components/Workcard';
const Home = () => {
  return (
    <div>
      <Navbar/>
        <Heroimage/>
        <Workcard/>
         <Footer/>
     
    </div>
  )
}

export default Home
