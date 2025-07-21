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
import Gallery from "./Gallery";

const places = [
  { image: japana, title: "Tokyo, Japan" },
  { image: japand, title: "Osaka Castle" },
  { image: japang, title: "Mount Koya" },
  { image: japanj, title: "Fushimi Inari Taisha" },
  { image: japanb, title: "Matsumoto Castle" },
  { image: japane, title: "Tokyo Tower" },
  { image: japanh, title: "Seiganto Ji Temple" },
  { image: japank, title: "Hokan-ji Temple" },
  { image: japanc, title: "Kamakura" },
  { image: japanf, title: "Arukurayama Sengen Park" },
  { image: japani, title: "Mount Fuji" },
  { image: japanl, title: "Sensoji Temple" }
];

const JapanGallary = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

   return <Gallery places={places} />;
};

export default JapanGallary;
