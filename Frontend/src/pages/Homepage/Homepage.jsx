import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import CoursesSection from "./CoursesSection/CoursesSection";
import FAQSection from "./FAQSection/FAQSection";
import ContactSection from "./ContactSection/ContactSection";
import Navbar from "../../utils/Navbar/Navbar";

const Homepage = () => {
  return (
    <main className="page-container">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <FAQSection />
      <ContactSection></ContactSection>
    </main>
  );
};

export default Homepage;
