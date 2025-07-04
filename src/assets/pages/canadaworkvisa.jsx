import React from 'react';
import { useNavigate } from 'react-router-dom';
import canadaworkbanner from '../images/canadaworkbanner.png';
import Footer from './footer';
import usavisa from '../images/usavisa.png';
import InqueryCommon from './inquerycommon';



const CanadaWorkVisa = () => {
  return (
    <>
     

    

                 <div className="main-usa-page">
                    
                       <div className="main-banner-common"
                           style={{
                             backgroundImage: `url(${canadaworkbanner})`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center',
                             height: '720px',
                             width: '100%',
                             objectFit:'contain',
                           }}
                           >
                           <div className="truva-container">
                               <div className="banner-common-title">
                               <h2>Canada Work Visa   </h2>
                      
                           </div>
                           </div>
                           </div>
                           <div className="main-usa-data">
                            <div className="truva-container">
                           <div className="usainner-block">
                            <div className="usainner-images">
                              <img src={usavisa} alt="usavisa" />
                            </div>
                            <div className="usainner-detail">
                              <h2>Canada Work Visa  </h2>
                              <p>Canada’s economy welcomes skilled foreign workers through employer-sponsored or 
LMIA-based work permits. Whether you’re a healthcare professional, IT expert, or trade 
worker, we help you find opportunities that match your profile. Truva guides you through 
job offers, documentation, LMIA compliance, and biometrics. Our dedicated team 
ensures all timelines and formats align with IRCC requirements. With post-application 
support and pre-departure orientation, your transition into the Canadian workforce 
becomes hassle-free. 
                </p>
                
             
                
                            </div>
                
                            
                           </div>
                          
                     </div>
                     </div>

                      <div>
                  <InqueryCommon/>
                </div>
                     </div>

      <Footer />
    </>
  );
};

export default CanadaWorkVisa;