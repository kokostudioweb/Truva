import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import studentvisabaner from '../../images/studentvisabaner.png';



const Canada = () => {
  return (
    <>
     

     <div className="main-banner-common"
                style={{
                  backgroundImage: `url(${studentvisabaner})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '845px',
                  width: '100%',
                  objectFit:'contain',
                }}
                >
                <div className="truva-container">
                    <div className="banner-common-title">
                    <h2>Canada Student Visa     </h2>
           
                </div>
                </div>
                </div>

      <Footer />
    </>
  );
};

export default Canada;