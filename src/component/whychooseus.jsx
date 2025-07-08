import React, { useEffect, useRef } from 'react';
import whychooseround from '../assets/images/whychooseround.png';
import visaicon from '../assets/images/visaicon.svg';
import packageicon from '../assets/images/packageicon.svg';
import transparencyicon from '../assets/images/transparencyicon.svg';
import expertsicon from '../assets/images/expertsicon.svg';
import reliableicon from '../assets/images/reliableicon.svg';
import globalcon from '../assets/images/globalcon.svg';

const cardDataLeft = [
  {
    icon: visaicon ,
    title: 'End-to-End Visa Assistance',
    desc: 'From counseling to documentation – we manage it all.',
  },
  {
    icon: packageicon,
    title: 'Travel Packages Tailored for You',
    desc: 'Handpicked destinations and personalized itineraries for every kind of traveler.',
  },
  {
    icon: transparencyicon,
    title: '100% Transparency',
    desc: 'Clear guidance, no hidden costs, and timely communication.',
  },
];

const cardDataRight = [
  {
    icon: expertsicon,
    title: 'Experienced Consultants & Travel Experts',
    desc: 'A team of certified professionals delivering results that matter.',
  },
  {
    icon: reliableicon,
    title: 'Fast & Reliable Processing',
    desc: 'Quick turnarounds with zero compromises on quality and compliance.',
  },
  {
    icon: globalcon,
    title: 'Global Reach with Local Insight',
    desc: 'Strong international partnerships backed by region-specific expertise to make your journey smoother—wherever you go.',
  },
];

// Utility to convert title to CSS-safe class name
const toKebabCase = str =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add('animate'), i * 150);
            });
          } else {
            cards.forEach(card => card.classList.remove('animate'));
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className='main-chooseus' id="why" ref={sectionRef}>
      <h2>Why Choose Us</h2>
      <div className="why-container">

        {/* Left Column */}
        <div className="cards-column">
          {cardDataLeft.map((card, idx) => (
            <div
              className={`card left card-${toKebabCase(card.title)}`}
              key={idx}
            >
              <div className="icon-box">
                <img src={card.icon} alt="icon" />
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="center-image">
          <img src={whychooseround} alt="Team" />
        </div>

        {/* Right Column */}
        <div className="cards-column">
          {cardDataRight.map((card, idx) => (
            <div
              className={`card right card-${toKebabCase(card.title)}`}
              key={idx}
            >
              <div className="icon-box">
                <img src={card.icon} alt="icon" />
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
