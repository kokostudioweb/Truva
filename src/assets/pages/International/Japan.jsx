import React from 'react';
import { useNavigate } from 'react-router-dom';

import japanbanner from '../../images/japanbanner.png';
import japanhero from '../../images/japanhero.png';
import inquaryimage from '../../images/inquaryimage.png';
import Gallery from '../Gallery';
import Contactform from '../contactform';
import maps from "../../images/maps.svg";
import phoneicon from "../../images/phoneicon.svg";
import mailicon from "../../images/mailicon.svg";
import InqueryCommon from '../inquerycommon';
import Footer from '../footer';
import JapanGallary from '../../../component/japangallary';
import CountryInfoCards from '../../../component/CountryInfoCards';
import language from "../../images/language.svg";
import thumbup from "../../images/thumbup.svg";
import userdollar from "../../images/userdollar.svg";
import temperature from "../../images/temperature.svg";

const Japan = () => {
  const singaporeCards = [
  {
    title: "CLIMATE",
    icon: temperature,
    items: [
      "The average temperature across Japan typically ranges between –5°C to 35°C . ",
      "These temperatures are averages and  vary depending on the specific location and year. ",
    ],
  },
  {
    title: "CURRENCY",
    icon: userdollar,
    items: ["The currency of Japan is the Japanese Yen (JPY)."],
  },
  {
    title: "LANGUAGE",
    icon: language,
    items: [
      "The official language of Japan is Japanese.",
      "Japanese is the dominant language, some people, especially in urban areas, may speak English.",
    ],
  },
  {
    title: "BEST TIME TO VISIT",
    icon: thumbup,
    items: [
      "March to May and September to November are the most recommended times for pleasant weather and natural beauty.",
    ],
  },
];
  
  return (
    <>
     
   <div className="main-banner-common"
                style={{
                  backgroundImage: `url(${japanbanner})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '720px',
                  width: '100%',
                  objectFit:'contain',
                }}
                >
                <div className="truva-container">
                    <div className="banner-common-title">
                    <h2>Japan </h2>
           
                </div>
                </div>
                
                </div>
                <div className="main-usa-data">
                        <div className="truva-container">
                          <div className="usainner-block">
                            <div className="usainner-images">
                              <img src={japanhero} alt="japanhero" />
                            </div>
                            <div className="usainner-detail">
                              <h2 className=''>Japan
                                
                  </h2>
             
                              <p>Step into a country where ancient traditions meet futuristic innovations — Japan is a timeless destination full of contrasts. Wander through Kyoto’s serene temples, explore the buzzing streets of Tokyo, or chase cherry blossoms in spring. From sumo wrestling matches to robot restaurants, every moment in Japan promises a new story.
   </p>
                            
                              <p>Truva Overseas brings you the best of Japan with guided experiences that cover cultural immersion, high-tech wonders, and culinary delights. Whether you're a solo traveler fascinated by heritage or a family ready for fun at Disneyland Tokyo, we tailor each itinerary to showcase the heart and harmony of Japan.
                              </p>
                
                            </div>
                
                
                          </div>
                       
                        </div>
                      </div>
                      <div className="country-card">
                      <div className="truva-container">
                         <CountryInfoCards cards={singaporeCards} />
                      </div>
                      </div>
                <div className="main-galary-section">
                  <div className="truva-container">
<JapanGallary />
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

export default Japan;
