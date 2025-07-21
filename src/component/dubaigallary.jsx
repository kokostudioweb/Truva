// src/components/DubaiGallery.jsx
import React from "react";
import Gallery from "./Gallery";

import dubaione from "../assets/images/dubaione.png";
import dubaitwo from "../assets/images/dubaitwo.png";
import dubaithree from "../assets/images/dubaithree.png";
import dubaitfour from "../assets/images/dubaitfour.png";
import dubaitfive from "../assets/images/dubaitfive.png";
import dubaitsix from "../assets/images/dubaitsix.png";
import dubaitseven from "../assets/images/dubaitseven.png";
import dubaiteight from "../assets/images/dubaiteight.png";
import dubaitenine from "../assets/images/dubaitenine.png";
import dubaiteten from "../assets/images/dubaiteten.png";
import dubaiteleven from "../assets/images/dubaiteleven.png";
import dubaitwalve from "../assets/images/dubaitwalve.png";

const places = [
  { image: dubaione, title: "Abu Dhabi" },
  { image: dubaitfour, title: "Resort in Jumeirah Beach Residence (JBR)" },
  { image: dubaitseven, title: "Palm Jumeirah" },
  { image: dubaiteten, title: "Burj Khalifa" },
  { image: dubaitwo, title: "Dubai Marina" },
  { image: dubaitfive, title: "Atlantis The Royal" },
  { image: dubaiteight, title: "Grand Hyatt Dubai" },
  { image: dubaiteleven, title: "Museum of The Future" },
  { image: dubaithree, title: "United Arab Emirates" },
  { image: dubaitsix, title: "Burj AI Arab Jumeirah" },
  { image: dubaitenine, title: "Dhow Cruise " },
  { image: dubaitwalve, title: "Dubai Frame" }
];

const DubaiGallery = () => {
  return <Gallery places={places} />;
};

export default DubaiGallery;
