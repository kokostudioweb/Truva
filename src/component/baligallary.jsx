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
import Gallery from "./Gallery";

const places = [
  { image: balia, title: "Bajra Sandhi Monument" },
  { image: balid, title: "Kuta Beach" },
  { image: balig, title: "Gunung Lebah Temple" },
  { image: balij, title: "Campuhan Ridge Walk" },
  { image: balib, title: "Denpasar City" },
  { image: balie, title: "Uluwatu Temple" },
  { image: balih, title: "Tegallalang rice terraces" },
  { image: balik, title: "Tirta Empul" },
  { image: balic, title: "Taman Werdhi Budaya" },
  { image: balif, title: "Ubud Palace" },
  { image: balii, title: "Tanah Lot" },
  { image: balil, title: "Thuy Tien Lake" }
];

const BaliGallary = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return <Gallery places={places} />;
};

export default BaliGallary;
