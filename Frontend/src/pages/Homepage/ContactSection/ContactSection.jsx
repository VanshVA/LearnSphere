import React from 'react'
import './ContactSection.css'

const ContactSection = () => {
  return (
    <div className='contact-section-container'>
      <div className="contact-left">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7005.437387352591!2d77.36272873934332!3d28.608214771746326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce565fcf639e7%3A0x677c4d7bd48136!2sSector%2059%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1731924888493!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="contact-right">
        <h1>Any question in mind? Don’t Worry Contact Us.</h1>
        <div className="contact-line-1">
          <input type="text" placeholder='Enter Name'/>
          <input type="email" placeholder='Enter Email address' />
        </div>
        <div className="contact-line-2">
          <input type="text" placeholder='Subject'/>
        </div>
        <textarea placeholder='Enter your text here'></textarea>
        <button className='basic-button'>Send Message</button>
      </div>
    </div>
  )
}

export default ContactSection