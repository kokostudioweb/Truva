import React from 'react';
import { useNavigate } from 'react-router-dom';

import turkeybanner from '../../images/turkeybanner.png';
import turkeyhero from '../../images/turkeyhero.png';
import InqueryCommon from '../inquerycommon';
import Footer from '../footer';
import TurkeyGallary from '../../../component/turkeygallary';
import CountryInfoCards from '../../../component/CountryInfoCards';
import language from "../../images/language.svg";
import thumbup from "../../images/thumbup.svg";
import userdollar from "../../images/userdollar.svg";
import temperature from "../../images/temperature.svg";

const Turkey = () => {
     const singaporeCards = [
  {
    title: "CLIMATE",
    icon: temperature,
    items: [
      "The average temperature across Turkey typically ranges between 12°C to 30°C year-round, with extremes depending on the altitude and region. ",
    ],
  },
  {
    title: "CURRENCY",
    icon: userdollar,
    items: ["The official currency of Turkey is the Turkish Lira (TRY)."],
  },
  {
    title: "LANGUAGE",
    icon: language,
    items: [
      "The official language of Turkey is Turkish (Türkçe), which is spoken by the vast majority of the population.",
      "English is widely spoken in major cities, tourist areas, hotels, and restaurants.",
    ],
  },
  {
    title: "BEST TIME TO VISIT",
    icon: thumbup,
    items: [
      "Best Overall: April to June and September to November for mild weather, fewer crowds, and ideal conditions for sightseeing and outdoor activities.",
    ],
  },
];
  
  return (
    <>
     
   <div className="main-banner-common"
                style={{
                  backgroundImage: `url(${turkeybanner})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '720px',
                  width: '100%',
                  objectFit:'contain',
                }}
                >
                <div className="truva-container">
                    <div className="banner-common-title">
                    <h2>Turkey </h2>
           
                </div>
                </div>
                
                </div>
                   <div className="main-usa-data">
                                        <div className="truva-container">
                                          <div className="usainner-block">
                                            <div className="usainner-images">
                                              <img src={turkeyhero} alt="turkeyhero" />
                                            </div>
                                            <div className="usainner-detail">
                                              <h2 className=''>Turkey
                                                
                                  </h2>
                             
                                              <p>A land of myths, mosaics, and mesmerizing beauty, Turkey is where East meets West in spectacular harmony. Explore the ruins of Ephesus, marvel at the fairy chimneys of Cappadocia, and relax in the thermal waters of Pamukkale. From the vibrant bazaars of Istanbul to the Mediterranean beaches of Antalya, Turkey offers history, flavor, and warm hospitality.
</p>
                                            
                                              <p>At Truva Overseas, we invite you to uncover Turkey’s magic with tours that delve deep into its cultural richness and scenic landscapes. Whether you're an explorer, a history enthusiast, or a couple seeking a romantic escape, our Turkey packages promise an experience as dynamic and diverse as the country itself.    </p>
                                
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

                  
<TurkeyGallary/>
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

export default Turkey;
