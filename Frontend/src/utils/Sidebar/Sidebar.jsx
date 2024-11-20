import React from 'react'
import './Sidebar.css'

const Sidebar = ({isOpen}) => {
    
  return (
    <div className={`sidebar ${ isOpen? "open" : " "}`}>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#course">Courses</a>
        <a href="#contact">Contact</a>
        
    </div>
  )
}

export default Sidebar