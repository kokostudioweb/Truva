import React, { useEffect } from 'react';
import bihar from '../images/bihar.jpeg';
import Gujarat from '../images/gujarat.jpg';
import Haryana from '../images/Haryana.jpeg';
import kerala from '../images/kerala.jpeg';
import madhya from '../images/madhya.jpeg';
import maharashtra from '../images/maharashtra.jpeg';
import odisha from '../images/odisha.jpeg';
import punjab from '../images/punjab.jpeg';
import seven from '../images/seven.jpeg';
import tamil from '../images/tamil.jpeg';
import telangana from '../images/telangana.jpeg';
import uttarakhand from '../images/uttarakhand.jpeg';
import uttar from '../images/uttar.jpeg';
import west from '../images/west.jpg';
import karnataka from '../images/karnataka.jpg';
import rajasthan from '../images/rajasthan.jpeg';
import Jammu from '../images/Jammu.jpeg';
import Chandigarh from '../images/Chandigarh.avif';
import Chhattisgarh from '../images/Chhattisgarh.avif';
import Delhi from '../images/Delhi.avif';
import Goa from '../images/Goa.avif';
import { useNavigate } from 'react-router-dom';
const galleryData = [
  {
    image: bihar,
    title: 'Bihar',
    description: 'Discover spiritual journeys, ancient ruins, and cultural heritage in the land of enlightenment.',
  },
  {
    image: Chandigarh,
    title: 'Chandigarh',
    description: 'Enjoy the serenity of India’s cleanest and most organized cityscape.',
  },
  {
    image: Chhattisgarh,
    title: 'Chhattisgarh',
    description: 'Explore offbeat natural wonders, tribal culture, and waterfalls in the heart of India.',
  },
  {
    image: Delhi,
    title: 'Delhi',
    description: 'Dive into history, street food, and a vibrant mix of old and new.',
  },
  {
    image: Goa,
    title: 'Goa',
    description: 'Sun, sand, and nightlife await in India’s ultimate beach paradise.',
  },
  {
    image: Gujarat,
    title: 'Gujarat',
    description: 'Experience wildlife, culture, and spiritual retreats in the land of legends.',
  },
  {
    image: Haryana,
    title: 'Haryana',
    description: 'Discover green retreats, modern cities, and traditional Haryanvi charm.',
  },
 
 
  {
    image: Jammu,
    title: 'Jammu & Kashmir',
    description: 'Heaven on Earth with stunning valleys and snow-capped peaks.',
  },
  {
    image: kerala,
    title: 'Kerala',
    description: 'Cruise through backwaters and rejuvenate in God’s Own Country.',
  },
  {
    image: karnataka,
    title: 'Karnataka',
    description: 'From heritage ruins to silicon cities, discover all sides of Karnataka.',
  },
  {
    image: madhya,
    title: 'Madhya Pradesh',
    description: 'See India’s heart through ancient forts, wildlife, and spiritual centers.',
  },
  {
    image: maharashtra,
    title: 'Maharashtra',
    description: 'Blend urban energy with hill stations, caves, and coastal escapes.',
  },
  {
    image: odisha,
    title: 'Odisha',
    description: 'Home to temples, beaches, and tribal culture off the tourist map.',
  },
  {
    image: punjab,
    title: 'Punjab',
    description: 'Relish vibrant culture, food, and golden spirituality.',
  },
 
  {
    image: seven,
    title: 'Seven Sisters',
    description: 'Northeast India’s untouched beauty and tribal cultures await discovery.',
  },
  {
    image: tamil,
    title: 'Tamil Nadu',
    description: 'Sacred temples, beaches, and classical heritage in one rich mix.',
  },
  {
    image: telangana,
    title: 'Telangana',
    description: 'Blend of Nizami grandeur and emerging technology hubs.',
  },
  {
    image: uttarakhand,
    title: 'Uttarakhand',
    description: 'Trek through spiritual lands and breathtaking Himalayan trails.',
  },
  {
    image: uttar,
    title: 'Uttar Pradesh',
    description: 'Historical cities and holy rivers shape India’s spiritual heart.',
  },
  {
    image: west,
    title: 'West Bengal',
    description: 'From Kolkata chaos to Darjeeling calm, Bengal is many worlds in one.',
  },
   {
    image: rajasthan,
    title: 'Rajasthan',
    description: 'Royal palaces, desert safaris, and colorful festivals await.',
  },
 
//    {
//     image: 'https://tourism.jharkhand.gov.in/app-assets/image/History1.jpg',
//     title: 'Jharkhand',
//     description: 'Unveil forest trails, temples, and waterfalls in this natural gem.',
//   },
//   {
//     image: 'https://images.pexels.com/photos/3661775/pexels-photo-3661775.jpeg?auto=compress&cs=tinysrgb&w=600',
//     title: 'Himachal Pradesh',
//     description: 'Mountains, monasteries, and adventures in the lap of the Himalayas.',
//   },
];


const Gallery = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll progress bar
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      document.querySelector('.scroll-indicator').style.width = `${scrolled}%`;
    };
    window.addEventListener('scroll', onScroll);

    // Intersection Observer for animation
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.gallery-item').forEach(item => observer.observe(item));

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="truva-container">
      {/* <div className="scroll-indicator"></div> */}
      {/* <h1>Inspiring Gallery</h1> */}
      <div className="gallery">
        {galleryData.map((item, index) => (
          <div className="gallery-item cursor-pointer"  style={{ '--delay': index + 1 }} data-delay={index + 1} key={index} onClick={() => navigate('/International')} >
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            {/* <a href="https://unsplash.com" className="photo-credit" target="_blank" rel="noreferrer">
              Photo by Unsplash
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
