import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import swipericoncoma from '../assets/images/swipericoncoma.png';

const testimonials = [
  {
    name: "Riya Patel",
    location: "Ahmedabad",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "I had an incredible experience with Truva Overseas for my Canada student visa. From shortlisting the right university to SOP writing and interview prep, the team was hands-on throughout. My visa came faster than expected and without a single query! Truly a professional and reliable team.",
  },
  {
    name: "Aakash",
    location: "Surat",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "Our honeymoon to Bali was absolutely magical, thanks to Truva Overseas! They customized every detail – from private villas and candlelight dinners to sightseeing and travel insurance. We didn’t have to worry about a single thing.",
  },
  {
    name: "Sneha Mehta",
    location: "Vadodara",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    text: "The Truva team made my Germany student visa journey so smooth. Right from selecting the university to getting the visa approval, they were there at every step.",
  },
  {
    name: "Rohan Desai",
    location: "Rajkot",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "Highly professional and courteous team! My parents' Schengen tourist visa got approved in just 10 days, thanks to their amazing guidance and prep support.",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "We went to Singapore for our honeymoon and Truva managed all bookings and visas smoothly. Loved their proactive communication and 24x7 support!",
  },
  {
    name: "Kunal Joshi",
    location: "Pune",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    text: "Their SOP editing and visa mock interview sessions were a game changer! Got my UK student visa approved without a single query. Thank you Truva Overseas!",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="testimonial-slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        // modules={[Pagination]}
        autoplay={{
    delay: 3000,       // 3 seconds between slides
    disableOnInteraction: false, // continue autoplay after user swipes
  }}
  modules={[Autoplay, Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          
          992: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="testimonial-header">
                {/* <img src={item.image} alt={item.name} /> */}
                <div className="name-box">
                  <h4>{item.name}</h4>
                  <span>{item.location}</span>
                </div>
                <div className="quote-icon"><img src={swipericoncoma} alt="swipericoncoma" /></div>
              </div>
              <p className="testimonial-text">{item.text}</p>
              <div className="stars">★★★★★</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
