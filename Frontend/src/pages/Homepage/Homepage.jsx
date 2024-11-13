import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import AboutSection from './AboutSection/AboutSection'
import CoursesSection from './CoursesSection/CoursesSection'
import FAQSection from './FAQSection/FAQSection'
import ContactSection from './ContactSection/ContactSection'

const Homepage = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <CoursesSection/>
      <FAQSection/>
      <ContactSection/>
    </div>
  )
}

export default Homepage