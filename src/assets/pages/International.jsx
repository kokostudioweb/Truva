import React from 'react';
import { useNavigate } from 'react-router-dom';
import internactionalbanner from '../images/internactionalbanner.png';
import InqueryCommon from './inquerycommon';
import Footer from './footer';

import singapur from '../images/singapur.png';
import duai from '../images/duai.png';
import japan from '../images/japan.png';
import bali from '../images/bali.png';
import malaysia from '../images/malaysia.png';
import turkey from '../images/turkey.png';
import rightarrow from '../images/rightarrow.svg';

const destinations = [
  {
    name: "Singapore",
    image: singapur,
    path: "/singapore",
    description: "A futuristic skyline, shopping bliss, and family-friendly attractions await in this island city-state.",
  },
  {
    name: "Dubai",
    image: duai,
    path: "/dubai",
    description: "Luxury, adventure, and desert thrills combine in this dynamic Middle Eastern gem.",
  },
  {
    name: "Japan",
    image: japan,
    path: "/japan",
    description: "Culture, technology, and cherry blossoms form the perfect travel experience.",
  },
  {
    name: "Bali",
    image: bali,
    path: "/bali",
    description: "Serene beaches, spiritual temples, and lush nature for soul-soothing escapes.",
  },
  {
    name: "Malaysia",
    image: malaysia,
    path: "/malaysia",
    description: "A cultural mosaic of cuisines, skyscrapers, and tropical beauty.",
  },
  {
    name: "Turkey",
    image: turkey,
    path: "/turkey",
    description: "Where East meets West - explore ancient ruins, bazaars, and exotic cuisine.",
  },
];

const International = () => {
  const navigate = useNavigate();

  return (
    <div className="international-main">
      <div
        className="main-banner-common"
        style={{
          backgroundImage: `url(${internactionalbanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '720px',
          width: '100%',
          objectFit: 'contain',
        }}
      >
        <div className="truva-container">
          <div className="banner-common-title">
            <h2>International Holiday Packages</h2>
          </div>
        </div>
      </div>

      <div className="truva-container">
        <div className="visa-card">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="ourservice-inner-card-data"
              onClick={() => navigate(place.path)}
            >
              <img className="visamain-image" src={place.image} alt={place.name} />
              <div className="serviceinner-card-details">
                <div className="invest-grey-round"></div>
                <h3>{place.name}</h3>
                <p>{place.description}</p>
                <button className="flex gap-2 items-center">
                  <span>Read More</span>
                  <span>
                    <img src={rightarrow} alt="rightarrow" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <InqueryCommon />
      <Footer />
    </div>
  );
};

export default International;
