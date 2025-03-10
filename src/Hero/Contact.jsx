import React from 'react'
import "./Contact.css"
import { IoCall } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdHeartHalf } from "react-icons/io";

const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='contact-heading'>Reach out to us</h1>
      <div className='contact-container'>
      <div className='contact-combined'>
        <p className='contact-para'>For any query call us at:</p>
        <div className='contact1'>
        <IoCall />
        <p>+91 XXXXXXXXXX</p>
        </div>
        <div className='contact1'>
        <IoCall />
        <p>+91 XXXXXXXXXX</p>
        </div>
      </div>
      <div className='contact-logo'>
      <FaInstagram />
      <FaTwitter />
      
      <FaLinkedin />
      <FaFacebook />
      </div>
      </div>
      <div className='contact-quote-div'>
      <h2 className='contact-quote'>Make World Happier</h2>
      <IoMdHeartHalf className='heart-logo'/>
      </div>
      
    </div>
  )
}

export default Contact
