import React from 'react';
import { useNavigate } from 'react-router-dom';

import malaysiabanner from '../../images/malaysiabanner.png';
import malaysiahero from '../../images/malaysiahero.png';
import Gallery from '../Gallery';
import Contactform from '../contactform';
import maps from "../../images/maps.svg";
import phoneicon from "../../images/phoneicon.svg";
import mailicon from "../../images/mailicon.svg";
import InqueryCommon from '../inquerycommon';
import Footer from '../footer';
import MalaysiaGallary from '../../../component/malaysiagallary';
import CountryInfoCards from '../../../component/CountryInfoCards';
import language from "../../images/language.svg";
import thumbup from "../../images/thumbup.svg";
import userdollar from "../../images/userdollar.svg";
import temperature from "../../images/temperature.svg";

const Malaysia = () => {
     const singaporeCards = [
  {
    title: "CLIMATE",
    icon: temperature,
    items: [
      "The average temperature across Malaysia typically ranges between 25°C to 30°C  year-round.",
    ],
  },
  {
    title: "CURRENCY",
    icon: userdollar,
    items: ["Malaysia’s currency is the Malaysian Ringgit (MYR), symbolized as RM."],
  },
  {
    title: "LANGUAGE",
    icon: language,
    items: [
      "Malaysia’s official language is Malay (Bahasa Malaysia), used in government, education, and daily communication.",
      "English is also widely spoken",
    ],
  },
  {
    title: "BEST TIME TO VISIT",
    icon: thumbup,
    items: [
      "The best time to visit Malaysia is between March to October as this period offers the most pleasant weather across most of the country, with less rain and comfortable temperatures.",
    ],
  },
];
  
  return (
    <>
     
   <div className="main-banner-common"
                style={{
                  backgroundImage: `url(${malaysiabanner})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '720px',
                  width: '100%',
                  objectFit:'contain',
                }}
                >
                <div className="truva-container">
                    <div className="banner-common-title">
                    <h2>Malaysia</h2>
           
                </div>
                </div>
                
                </div>
                <div className="main-usa-data">
                        <div className="truva-container">
                          <div className="usainner-block">
                            <div className="usainner-images">
                              <img src={malaysiahero} alt="malaysiahero" />
                            </div>
                            <div className="usainner-detail">
                              <h2 className=''>Malaysia
                                
                  </h2>
             
                              <p>A harmonious blend of modernity and tradition, Malaysia offers a colorful adventure for travelers of all kinds. Explore Kuala Lumpur’s soaring skyline, indulge in culinary delights in Penang, and unwind on the tropical beaches of Langkawi. Rich in culture and diversity, Malaysia is a feast for the senses and a playground for the curious.</p>
                            
                              <p>Truva Overseas crafts Malaysian tours that highlight the country's multicultural charm. Whether you're looking for a family-friendly vacation, a shopping and food expedition, or a cultural journey through Melaka's heritage streets, we provide a hassle-free travel experience with local insights and unforgettable memories.
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

                 
<MalaysiaGallary />
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

export default Malaysia;
