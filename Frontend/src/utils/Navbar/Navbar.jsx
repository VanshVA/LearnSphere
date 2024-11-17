import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero-section-container").offsetHeight;
      setScrolled(window.scrollY > heroHeight / 2);
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
        <button className="basic-button" onClick={()=>navigate('/login')}>Login</button>
      </div>

      <div className="hamburger">
        <i class="ri-menu-line basic-button"></i>
      </div>
    </nav>
  );
};

export default Navbar;
