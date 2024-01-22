import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
    
    <Navbar/>
    <Heroimg2 heading="Contact." text ="Just add you name and a active email id below and type your message  " />
    <Form/>
    <Footer/>
    </div>
  )
}

export default Contact
