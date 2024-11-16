import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero-section-container").offsetHeight;
      setScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">logo </div>
      <div className="navlinks">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#course">Courses</a>
        <a href="#contact">Contact</a>
        <button className="basic-button">Login</button>
      </div>

      <div className="hamburger">
        <i class="ri-menu-line basic-button"></i>
      </div>
    </nav>
  );
};

export default Navbar;
