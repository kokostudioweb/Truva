// src/components/MasonryGallery.jsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import turkeya from '../assets/images/turkeya.png';
import turkeyb from '../assets/images/turkeyb.png';
import turkeyc from '../assets/images/turkeyc.png';
import turkeyd from '../assets/images/turkeyd.png';
import turkeye from '../assets/images/turkeye.png';
import turkeyf from '../assets/images/turkeyf.png';
import turkeyg from '../assets/images/turkeyg.png';
import turkeyh from '../assets/images/turkeyh.png';
import turkeyi from '../assets/images/turkeyi.png';
import turkeyj from '../assets/images/turkeyj.png';
import turkeyk from '../assets/images/turkeyk.png';
import turkeyl from '../assets/images/turkeyl.png';

const images = [
  turkeya, turkeyd, turkeyg, turkeyj,
  turkeyb, turkeye, turkeyh, turkeyk,
  turkeyc, turkeyf, turkeyi, turkeyl
];

const TurkeyGallary = () => {
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

export default TurkeyGallary;
