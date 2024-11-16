import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import slide_1 from '../../../../public/slide_1.jpg.webp'
import slide_2 from '../../../../public/slide_2.jpg.webp'
import slide_3 from '../../../../public/slide-1.jpg.webp'

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    // slide_1,
    // slide_2,
    // slide_3
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
            <h1>Develop a passion for learning new things</h1>
            <p>Was certainty remaining engrossed applauded sir how discovery. Settled opinion how enjoyed greater joy adapted too shy. Now properly surprise expenses.</p>
            <input type="text" placeholder="Search courses..."/>
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
