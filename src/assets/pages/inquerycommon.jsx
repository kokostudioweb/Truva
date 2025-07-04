
import React from 'react';
import maps from "../images/maps.svg";
import phoneicon from "../images/phoneicon.svg";
import mailicon from "../images/mailicon.svg";
import Contactform from './contactform';
import inquaryimage from '../images/inquaryimage.png';

const InqueryCommon = () => {
  return (
    <>
     
   <div className="inquery-common-main">
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
                                          <li className='mb-3'><a href="#"><span><img src={maps} alt="maps" /></span>C-804, Titanium City Center Business Park, 100 Feet Rd, Satellite, Ahmedabad, Gujarat 380015</a></li>
                                          <li className="d-flex items-center gap-4 mb-3">
                                          <span>
                                          <img src={phoneicon} alt="phoneicon" />
                                          </span>
                                           <span>
                                           <a href="tel:+91 6356494895">+91 6356494895</a>
                                           {/* <a href="tel:+0987654321">+0 987 654 321</a> */}
                                           </span>
                                           </li>
                                           <li><a href="mailto:truvaoverseas@gmail.com"><span><img src={mailicon} alt="mailicon" /></span>truvaoverseas@gmail.com</a></li>
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

                </div>
    </>
  );
};

export default InqueryCommon;
