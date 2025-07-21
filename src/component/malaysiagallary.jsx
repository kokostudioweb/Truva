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
import Gallery from "./Gallery";

const places = [
  { image: malaysiaa, title: "Malacca" },
  { image: malaysiad, title: "Gunung Mulu National Park" },
  { image: malaysiag, title: "Kek lok si" },
  { image: malaysiaj, title: "Penang Hill" },
  { image: malaysiab, title: "Sultan Abdul Samad Building" },
  { image: malaysiae, title: "Cameron Highlands" },
  { image: malaysiah, title: "Kuala Lumpur " },
  { image: malaysiak, title: "Batu Caves" },
  { image: malaysiac, title: "Langkawi Sky Bridge" },
  { image: malaysiaf, title: "Langkawi" },
  { image: malaysiai, title: "KL Tower" },
  { image: malaysial, title: "Batu Caves" }
];


const MalaysiaGallary = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

 return <Gallery places={places} />;
};

export default MalaysiaGallary;
