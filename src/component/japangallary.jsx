// src/components/MasonryGallery.jsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import japana from '../assets/images/japana.png';
import japanb from '../assets/images/japanb.png';
import japanc from '../assets/images/japanc.png';
import japand from '../assets/images/japand.png';
import japane from '../assets/images/japane.png';
import japanf from '../assets/images/japanf.png';
import japang from '../assets/images/japang.png';
import japanh from '../assets/images/japanh.png';
import japani from '../assets/images/japani.png';
import japanj from '../assets/images/japanj.png';
import japank from '../assets/images/japank.png';
import japanl from '../assets/images/japanl.png';

const images = [
  japana, japand, japang, japanj,
  japanb, japane, japanh, japank,
  japanc, japanf, japani, japanl
];

const JapanGallary = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
  
    <div className="gallery-container">
      <div className="masonry-grid">
        {images.map((img, index) => (
          <div className="masonry-item" key={index} data-aos="fade-up">
            <img src={img} alt={`Singapore ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JapanGallary;
