// src/components/MasonryGallery.jsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Singaporeone from '../assets/images/Singaporeone.png';
import Singaporetwo from '../assets/images/Singaporetwo.png';
import Singaporethree from '../assets/images/Singaporethree.png';
import Singaporefour from '../assets/images/Singaporefour.png';
import Singaporefive from '../assets/images/Singaporefive.png';
import Singaporesix from '../assets/images/Singaporesix.png';
import Singaporeseven from '../assets/images/Singaporeseven.png';
import Singaporeight from '../assets/images/Singaporeight.png';
import Singapornine from '../assets/images/Singapornine.png';
import Singaporten from '../assets/images/Singaporten.png';
import Singaporelaven from '../assets/images/Singaporelaven.png';

const images = [
  Singaporeone, Singaporetwo, Singaporethree, Singaporefour,
  Singaporefive, Singaporesix, Singaporeseven, Singaporeight,
  Singapornine, Singaporten, Singaporelaven, Singaporesix
];

const SingaporeGallery = () => {
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

export default SingaporeGallery;
