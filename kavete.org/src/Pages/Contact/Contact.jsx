import React, { useState } from 'react'
import './Contact.css'
import { FaRegMessage } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCaretSquareRight } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6d0873c3-250c-4d2b-a155-4b26ae7d0bda");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='fadein'>

       <div className="hero">
            <h1>Contact Us</h1>
            
        </div>

      <div className="app-box">
      <div className='contact'>
      
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="text" name='phone' placeholder='Enter your phone number' required/>
                <label>Write your message here</label>
                <textarea name='message' placeholder='Enter your message' rows="6" required></textarea>
                <button type='submit' className='button'>Submit now <span><FaCaretSquareRight /></span></button>
            </form>
            <span>{result}</span>
        </div>


        <div className="contact-col">
       
           
            <ul>
                <li><span><IoMailOutline /></span>Contact@Kavete.org</li>
                <li><span><FaPhoneAlt /></span>+254 0798-566-564</li>
                <li><span><FaLocationDot /></span>Lavington, Nairobi<br/>Kenya</li>
            </ul>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Contact