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
import Gallery from "./Gallery";

const places = [
  { image: turkeya, title: "Kaleici" },
  { image: turkeyd, title: "Mount Nemrut" },
  { image: turkeyg, title: "Ephesus" },
  { image: turkeyj, title: "Antalya" },
  { image: turkeyb, title: "Balat Street" },
  { image: turkeye, title: "Mardin" },
  { image: turkeyh, title: "Cappadocia" },
  { image: turkeyk, title: "Suleymaniya Mosque" },
  { image: turkeyc, title: "The Maiden's Tower" },
  { image: turkeyf, title: "Bosphorus Bridge" },
  { image: turkeyi, title: "Izmir Clock Tower" },
  { image: turkeyl, title: "Galata Tower" }
];

const TurkeyGallary = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

return <Gallery places={places} />;
};

export default TurkeyGallary;
