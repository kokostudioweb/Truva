// src/components/MasonryGallery.jsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import balia from '../assets/images/balia.png';
import balib from '../assets/images/balib.png';
import balic from '../assets/images/balic.png';
import balid from '../assets/images/balid.png';
import balie from '../assets/images/balie.png';
import balif from '../assets/images/balif.png';
import balig from '../assets/images/balig.png';
import balih from '../assets/images/balih.png';
import balii from '../assets/images/balii.png';
import balij from '../assets/images/balij.png';
import balik from '../assets/images/balik.png';
import balil from '../assets/images/balil.png';

const images = [
  balia, balid, balig, balij,
  balib, balie, balih, balik,
  balic, balif, balii, balil
];

const BaliGallary = () => {
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

export default BaliGallary;
