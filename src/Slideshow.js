import React, { useEffect, useState } from 'react';
import MainShoe from './assets/main-shoe.png';
import iconName from './assets/shopping-cart.png';
import './Slideshow.css'; // Make sure to include your CSS

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");

      // Hide all slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
      }

      let newSlideIndex = (slideIndex + 1) % slides.length;
      setSlideIndex(newSlideIndex);

      // Show the new slide
      slides[newSlideIndex].style.opacity = "1";

      // Update dots
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      dots[newSlideIndex].className += " active";
    };

    const interval = setInterval(showSlides, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [slideIndex]);

  return (
    <div className="slideshow-container">
      <div className="slide-wrapper">
        <div className="mySlides">
          <div className="numbertext">1 / 3</div>
          <img src={MainShoe} style={{ width: '30%' }} alt="Slide 1" />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides">
          <div className="numbertext">2 / 3</div>
          <img src={iconName} style={{ width: '30%' }} alt="Slide 2" />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides">
          <div className="numbertext">3 / 3</div>
          <img src={MainShoe} style={{ width: '30%' }} alt="Slide 3" />
          <div className="text">Caption Three</div>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => setSlideIndex(0)}></span>
        <span className="dot" onClick={() => setSlideIndex(1)}></span>
        <span className="dot" onClick={() => setSlideIndex(2)}></span>
      </div>
    </div>
  );
};

export default Slideshow; 