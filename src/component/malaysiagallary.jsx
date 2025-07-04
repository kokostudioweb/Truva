// src/components/MasonryGallery.jsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import malaysiaa from '../assets/images/malaysiaa.png';
import malaysiab from '../assets/images/malaysiab.png';
import malaysiac from '../assets/images/malaysiac.png';
import malaysiad from '../assets/images/malaysiad.png';
import malaysiae from '../assets/images/malaysiae.png';
import malaysiaf from '../assets/images/malaysiaf.png';
import malaysiag from '../assets/images/malaysiag.png';
import malaysiah from '../assets/images/malaysiah.png';
import malaysiai from '../assets/images/malaysiai.png';
import malaysiaj from '../assets/images/malaysiaj.png';
import malaysiak from '../assets/images/malaysiak.png';
import malaysial from '../assets/images/malaysial.png';

const images = [
  malaysiaa, malaysiad, malaysiag, malaysiaj,
  malaysiab, malaysiae, malaysiah, malaysiak,
  malaysiac, malaysiaf, malaysiai, malaysial
];

const MalaysiaGallary = () => {
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

export default MalaysiaGallary;
