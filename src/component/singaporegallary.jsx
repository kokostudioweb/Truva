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
import Singaporeigh from '../assets/images/Singaporeigh.jpg';
import Singapornine from '../assets/images/Singapornine.png';
import Singaporten from '../assets/images/Singaporten.png';
import Singaporelaven from '../assets/images/Singaporelaven.png';
import Singaporetwalve from '../assets/images/Singaporetwalve.jpg';
import Gallery from './Gallery';

const places = [
  { image: Singaporeone, title: "Marina Bay" },
  { image: Singaporetwo, title: "The Merlion Park" },
  { image: Singaporethree, title: "Gardens by the Bay" },
  { image: Singaporefour, title: "Gardens by the Bay" },
  { image: Singaporefive, title: "Helix Bridge" },
  { image: Singaporesix, title: "Marina Bay Area" },
  { image: Singaporeseven, title: "Cloud Forest" },
  { image: Singaporeigh, title: "Sentosa" },
  { image: Singapornine, title: "Chinatown Street" },
  { image: Singaporten, title: "Singapore Flyer" },
  { image: Singaporelaven, title: "Supertree Grove" },
  { image: Singaporetwalve, title: "Civic District" }, // Singaporesix repeated
];


const SingaporeGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

return <Gallery places={places} />;
};

export default SingaporeGallery;
