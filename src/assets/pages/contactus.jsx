// src/pages/ContactUs.jsx
import React, { useState } from 'react';
import contactusbaner from '../../assets/images/contactusbaner.png';
import locationicon from '../../assets/images/locationicon.svg';
import callicon from '../../assets/images/callicon.svg';
import emailicon from '../../assets/images/emailicon.svg';
import ContactUsForm from '../../component/ContactusForm';
import Footer from './footer';

const ContactUs = () => {
  

  return (
    <>
 <div className="main-banner-common"
                style={{
                  backgroundImage: `url(${contactusbaner})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '720px',
                  width: '100%',
                  objectFit:'contain',
                }}
                >
                <div className="truva-container">
                    <div className="banner-common-title">
                    <h2>Contact Us </h2>
           
                </div>
                </div>
                
                </div>
                <div className="contactus-form">
                  <div className="truva-container">
                    <ContactUsForm/>
                  </div>
                </div>

                <div className="contact-details">
                  <div className="truva-container">
               <div className="contact-info-container">
      <div className="info-box">
        <div className="icon-circle">
          {/* Icon Placeholder */}
          <span className="icon-placeholder"><img src={callicon} alt="callicon" /></span>
        </div>
        <p>+91 6356494895</p>
      </div>

      <div className="divider"></div>

      <div className="info-box">
        <div className="icon-circle">
          {/* Icon Placeholder */}
          <span className="icon-placeholder"><img src={locationicon} alt="locationicon" /></span>
        </div>
        <p>
          C-804, Titanium City Center Business Park,
          100 Feet Rd, Satellite, Ahmedabad,
          Gujarat 380015
        </p>
      </div>

      <div className="divider"></div>

      <div className="info-box">
        <div className="icon-circle">
          {/* Icon Placeholder */}
          <span className="icon-placeholder"><img src={emailicon} alt="emailicon" /></span>
        </div>
        <p>truvaoverseas@gmail.com</p>
      </div>
    </div>
                  </div>
                </div>
<Footer/>
     
                </>
  );
};

export default ContactUs;
