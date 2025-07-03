// src/pages/ContactUs.jsx
import React, { useState } from 'react';
import contactusbaner from '../../assets/images/contactusbaner.png';

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
                </>
  );
};

export default ContactUs;
