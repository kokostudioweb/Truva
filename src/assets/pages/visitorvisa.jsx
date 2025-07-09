import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import visitorbanner from '../images/visitorbanner.png';
import visitorvisahero from '../images/visitorvisahero.png';
import europevisitor from '../images/europevisitor.png';
import australiyavisitor from '../images/australiyavisitor.png';
import usavisitor from '../images/usavisitor.png';
import ukvisitor from '../images/ukvisitor.png';
import canadavisitor from '../images/canadavisitor.png';

const visaCards = [
  {
    country: "Canada",
    img: canadavisitor,
    desc: "Explore the beauty of Canada with ease. We help you apply for family visits, tourism, or events with fast, accurate Canadian Visitor Visa support.",
  },
  {
    country: "USA",
    img: usavisitor,
    desc: "Planning to visit the USA for tourism or to meet loved ones? Our experts guide you through the B1/B2 Visitor Visa process smoothly.",
  },
  {
    country: "UK",
    img: ukvisitor,
    desc: "Visit friends, attend events, or experience British culture with confidence. Get expert help with UK Standard Visitor Visa applications and document preparation.",
  },
  {
    country: "Australia",
    img: australiyavisitor,
    desc: "From family visits to sightseeing, travel to Australia with the right visa. We handle eligibility, paperwork, and updates for your Visitor Visa success.",
  },
  {
    country: "Europe",
    img: europevisitor,
    desc: "Dreaming of Europe? We simplify your Schengen Visa process for smooth travel across 26 countries. Fast documentation, embassy guidance, and stress-free support.",
  },
];

const VisitorVisa = () => {
  const navigate = useNavigate();
  return (
    <>
     

     
            <div className="main-banner-common"
                style={{
                  backgroundImage: `url(${visitorbanner})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '720px',
                  width: '100%',
                  objectFit:'contain',
                }}
                >
                <div className="truva-container">
                    <div className="banner-common-title">
                    <h2>Visitor Visa   </h2>
           
                </div>
                </div>
                </div>

 <div className="main-usa-data">
        <div className="truva-container">
          <div className="usainner-block">
            <div className="usainner-images">
              <img src={visitorvisahero} alt="visitorvisahero" />
            </div>
            <div className="usainner-detail">
              <h2 className=''>Explore the World with Confidence
                
  </h2>
  <h3>Let Truva Handle the Paperwork</h3>
              <p>Whether you’re planning to attend a family wedding, explore iconic cities, or visit friends abroad, a visitor visa is your gateway to the world. At Truva Overseas, we specialize in making international travel effortless with expert assistance for Visitor Visas to Canada, USA, UK, Australia, and Europe. From assessing your eligibility and preparing the right documentation to guiding you through the latest embassy protocols, our team ensures a smooth, stress-free visa process every step of the way.
              </p>
              <h3>Why Choose Europe for Higher Education?</h3>
              <p>Our consultants stay updated with the changing visa norms and country-specific requirements to increase your approval chances. Whether it’s a Canadian Temporary Resident Visa, a UK Standard Visitor Visa, a Tourist Visa for Europe, or travel to the US or Australia, we tailor our support to your reason for visit - be it tourism, family visit, or short business trips. With Truva Overseas, you don’t just apply for a visa; you apply with confidence.

              </p>

            </div>


          </div>
       
        </div>
      </div>
      <div className="visa-bannerdata">
        <div className="truva-container">
              <div className="visa-container">
      {visaCards.map((card, index) => (
        <div className="card" key={index}>
          <div className="image-container">
            <img src={card.img} alt={`${card.country} Visa`} />
            <div className="card-title">{card.country} Visitor Visa</div>
            <div className="overlay">
              <h3>{card.country} Visitor Visa</h3>
              <p>{card.desc}</p>
              <button onClick={() => navigate('/contactus')}>Inquiry now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>

     

      <Footer />
    </>
  );
};

export default VisitorVisa;
