import React, { useEffect, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://picsum.photos/id/237/1920/1080",
    "https://picsum.photos/id/235/1920/1080",
    "https://picsum.photos/id/236/1920/1080",
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };
  
  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="hero-section-container">
      <div className="hero-section-background-image" style={{ backgroundImage: `url(${images[currentImage]})` }}/>{" "}
        <div className="hero-section-overlay">
          <div className="overlay-left">
            <h1>Develop a <span>passion</span> for <span>learning</span> new things</h1>
            <p>Was certainty remaining engrossed applauded sir how discovery. Settled opinion how enjoyed greater joy adapted too shy. Now properly surprise expenses.</p>
            <div className="input-container">
              <input type="text" placeholder="Search courses..."/>  
              <div className="search-icon"><i class="ri-search-line"></i></div>
            </div>
          </div>
          <div className="hero-section-button-container">
            <button onClick={handlePrev}><i class="ri-arrow-left-s-line"></i></button>
            <button onClick={handleNext}><i class="ri-arrow-right-s-line"></i></button>
          </div>
        </div>
    </div>
  );
};

export default HeroSection;
