import React from 'react';
import footerlogotruva from "../images/footerlogotruva.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linkdin from "../images/linkdin.svg";
import instagram from "../images/instagram.svg";
import maps from "../images/maps.svg";
import phoneicon from "../images/phoneicon.svg";
import mailicon from "../images/mailicon.svg";

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
     <div className="footer-main">
      <div className="truva-container">
        <div className="footer-inner-detail">
          <div className="footer-detail-common">
            <div className="logo-footer">
              <a href="#"> <img src={footerlogotruva} alt="footerlogotruva" /></a>
             
            </div>
             <p>Truva Overseas is your trusted partner for global visa solutions and unforgettable travel journeys. With a focus on reliability, personalized service, and success, we make your international plans simple and achievable.</p>
          <div className="social-media">
            <ul>
              <li>
                <a href=""><img src={facebook} alt="facebook" /></a>
              </li>
              {/* <li>
                <a href=""><img src={twitter} alt="twitter" /></a>
              </li> */}
              <li>
                <a href=""><img src={linkdin} alt="linkdin" /></a>
              </li>
              <li>
                <a href=""><img src={instagram} alt="instagram" /></a>
              </li>
            </ul>
          </div>
          </div>
          <div className="footer-detail-common">
            <div className="footer-title-inner">
              <h3>Quick Links</h3>
            </div>
            <div className="footer-manu">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/domestic">Domestic</Link></li>
                <li><Link to="/international">International</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-detail-common">
            <div className="footer-title-inner">
              <h3>Services</h3>
            </div>
            <div className="footer-manu">
              <ul>
                <li><Link to="/studentvisa">Student Visa</Link></li>
                <li><Link to="/visitorvisa">Visitor Visa</Link></li>
                <li><Link to="/Immigrate">Immigrate</Link></li>
                
              </ul>
            </div>
          </div>
          <div className="footer-detail-common">
            <div className="footer-title-inner">
              <h3>Contact us</h3>
            </div>
            <div className="footer-manu">
              <ul>
                <li><a href="https://www.google.com/maps?q=C-804,+Titanium+City+Center,+100+Feet+Road,+Satellite,+Ahmedabad,+Gujarat+380015"  target="_blank"><span><img src={maps} alt="maps" /></span>C- 804, Titanium City Center, 100 Feet Rd <br /> Satellite, Ahmedabad, Gujarat 380015</a></li>
                <li className="d-flex items-center gap-4">
                <span>
                <img src={phoneicon} alt="phoneicon" />
                </span>
                 <span>
                 <a href="tel:+1234567890">+91 6356 494 895</a>
                 {/* <a href="tel:+0987654321">+0 987 654 321</a> */}
                 </span>
                 </li>
                 <li><a href="mailto:truvaoverseas@gmail.com"><span><img src={mailicon} alt="mailicon" /></span>truvaoverseas@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
      </div>
      <div className="truva-container">
        <div className="footer-copyright-detail">
          <p> © 2023  Company. All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;