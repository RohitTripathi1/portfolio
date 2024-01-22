import "./FormStyles.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Sending email...");
        emailjs.sendForm('service_652wsdd', 'template_bvpa71z', form.current, 'CQj1LYsOf679Z3luW')
            .then((result) => {
                console.log(result.text);
                alert("Email sent successfully!");
                // the below functionality is for clearing the form 
                form.current.reset();
            })
            .catch((error) => {
                console.error(error.text);
                alert("Error sending email. Please try again.");
            });
    };

    return (
        <div className="form">
            <form ref={form} onSubmit={sendEmail}>
                <label>Your Name</label>
                <input type="text" name="from_name" placeholder="Enter your Name "/>
                <label>Your Email </label>
              <input type="email" name="from_email" placeholder="I can further contact you in this gmail id"/>
                             
                <label>Message</label>
                <textarea rows="6" name="message" placeholder="Type your message here"></textarea>
                <button className="btn" type="submit">Submit</button>
               
            </form>
        </div>
    );
}

export default Form;
