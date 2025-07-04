// src/components/MasonryGallery.jsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import dubaione from '../assets/images/dubaione.png';
import dubaitwo from '../assets/images/dubaitwo.png';
import dubaithree from '../assets/images/dubaithree.png';
import dubaitfour from '../assets/images/dubaitfour.png';
import dubaitfive from '../assets/images/dubaitfive.png';
import dubaitsix from '../assets/images/dubaitsix.png';
import dubaitseven from '../assets/images/dubaitseven.png';
import dubaiteight from '../assets/images/dubaiteight.png';
import dubaitenine from '../assets/images/dubaitenine.png';
import dubaiteten from '../assets/images/dubaiteten.png';
import dubaiteleven from '../assets/images/dubaiteleven.png';
import dubaitwalve from '../assets/images/dubaitwalve.png';

const images = [
  dubaione, dubaitfour, dubaitseven, dubaiteten,
  dubaitwo, dubaitfive, dubaiteight, dubaiteleven,
  dubaithree, dubaitsix, dubaitenine, dubaitwalve
];

const DubaiGallary = () => {
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

export default DubaiGallary;
