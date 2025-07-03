import React from 'react';
import { useNavigate } from 'react-router-dom';

import dubaibanner from '../../images/dubaibanner.png';
import dubaihero from '../../images/dubaihero.png';
import inquaryimage from '../../images/inquaryimage.png';
import Gallery from '../Gallery';
import Contactform from '../contactform';
import maps from "../../images/maps.svg";
import phoneicon from "../../images/phoneicon.svg";
import mailicon from "../../images/mailicon.svg";
import InqueryCommon from '../inquerycommon';
import Footer from '../footer';


const Dubai = () => {
  
  return (
    <>
     
   <div className="main-banner-common"
                style={{
                  backgroundImage: `url(${dubaibanner})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '720px',
                  width: '100%',
                  objectFit:'contain',
                }}
                >
                <div className="truva-container">
                    <div className="banner-common-title">
                    <h2>Dubai </h2>
           
                </div>
                </div>
                
                </div>
<div className="main-usa-data">
                        <div className="truva-container">
                          <div className="usainner-block">
                            <div className="usainner-images">
                              <img src={dubaihero} alt="dubaihero" />
                            </div>
                            <div className="usainner-detail">
                              <h2 className=''>Dubai
                                
                  </h2>
             
                              <p>Where luxury meets adventure, Dubai invites you to experience a world of extremes — from glittering malls to golden deserts. Ascend the towering Burj Khalifa, shop in the opulent Dubai Mall, or cruise through Dubai Marina in a private yacht. Families and thrill-seekers alike will love attractions like IMG Worlds of Adventure, Aquaventure Waterpark, and exciting desert safaris under the stars.</p>
                            
                              <p>With Truva Overseas, dive into the extravagant lifestyle of Dubai with thoughtfully designed itineraries that balance comfort, culture, and adrenaline. Whether it’s a romantic getaway, a shopping spree, or an action-packed vacation, we ensure your Dubai experience is as seamless as it is spectacular.
                              </p>
                
                            </div>
                
                
                          </div>
                       
                        </div>
                      </div>

                <div className="main-galary-section">
<Gallery />
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

export default Dubai;
