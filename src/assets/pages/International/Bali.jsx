import React from 'react';
import { useNavigate } from 'react-router-dom';

import balibanner from '../../images/balibanner.png';
import balihero from '../../images/balihero.png';
import Gallery from '../Gallery';
import Contactform from '../contactform';
import maps from "../../images/maps.svg";
import phoneicon from "../../images/phoneicon.svg";
import mailicon from "../../images/mailicon.svg";
import InqueryCommon from '../inquerycommon';
import Footer from '../footer';
import BaliGallary from '../../../component/baligallary';

const Bali = () => {
  
  return (
    <>
     
   <div className="main-banner-common"
                style={{
                  backgroundImage: `url(${balibanner})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '720px',
                  width: '100%',
                  objectFit:'contain',
                }}
                >
                <div className="truva-container">
                    <div className="banner-common-title">
                    <h2>Bali </h2>
           
                </div>
                </div>
                
                </div>

                <div className="main-usa-data">
                        <div className="truva-container">
                          <div className="usainner-block">
                            <div className="usainner-images">
                              <img src={balihero} alt="balihero" />
                            </div>
                            <div className="usainner-detail">
                              <h2 className=''>Bali
                                
                  </h2>
             
                              <p>Find your peace in Bali, where turquoise waves kiss white sands and spiritual energy flows through ancient temples. Known as the “Island of the Gods,” Bali offers everything from wellness retreats in Ubud to surfing in Uluwatu and vibrant beach clubs in Seminyak. The landscapes—volcanoes, rice terraces, waterfalls—are pure inspiration for the soul.
 </p>
                            
                              <p>With Truva Overseas, your Bali journey goes beyond the typical. We design personalized escapes for honeymooners, families, and wellness seekers alike, combining serene stays with immersive local experiences — be it a traditional Balinese ceremony, a cooking class, or a yoga session overlooking the jungle.
                              </p>
                
                            </div>
                
                
                          </div>
                       
                        </div>
                      </div>
                <div className="main-galary-section">
                  <div className="truva-container">

                 
<BaliGallary />
 </div>
                </div>
                 
                {/* <div className="inquery-common-main">
                  <div className="truva-container">
                  <div className="inquery-common">
                    <div className="inquery-title">
                      <h2>Inquiry Now</h2>
                    </div>
                    <div className="inqueryfoem-block">
                      <div className="left-form">
                        <Contactform />
                      </div>
                      <div className="right-detail">
                        <div className="contactdetail">
                          <div className="footer-manu">
                                        <ul>
                                          <li className='mb-3'><a href="#"><span><img src={maps} alt="maps" /></span>2715 Ash Dr. San Jose, South <br /> Dakota 83475</a></li>
                                          <li className="d-flex items-center gap-4 mb-3">
                                          <span>
                                          <img src={phoneicon} alt="phoneicon" />
                                          </span>
                                           <span>
                                           <a href="tel:+1234567890">+1 234 567 890</a>
                                           <a href="tel:+0987654321">+0 987 654 321</a>
                                           </span>
                                           </li>
                                           <li><a href="mailto:trungkienspktnd@gamail.com"><span><img src={mailicon} alt="mailicon" /></span>trungkienspktnd@gamail.com</a></li>
                                        </ul>
                                      </div>
                                      
                        </div>
                        <div className="inquery-images">
                                        <img src={inquaryimage} alt="inquaryimage" />
                                      </div>
                      </div>
                    </div>
                  </div>
                  </div>

                </div> */}
                <div>
                  <InqueryCommon/>
                </div>

      <Footer />
    </>
  );
};

export default Bali;
