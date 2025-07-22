import React from 'react';
import { useNavigate } from 'react-router-dom';

import singapurbanner from '../../images/singapurbanner.png';
import singapurhero from '../../images/singapurhero.png';
import inquaryimage from '../../images/inquaryimage.png';
import Gallery from '../Gallery';
import Contactform from '../contactform';
import language from "../../images/language.svg";
import thumbup from "../../images/thumbup.svg";
import userdollar from "../../images/userdollar.svg";
import temperature from "../../images/temperature.svg";
import InqueryCommon from '../inquerycommon';
import Footer from '../footer';
import SingaporeGallary from '../../../component/singaporegallary';
import CountryInfoCards from '../../../component/CountryInfoCards';

const Singapore = () => {
  const singaporeCards = [
  {
    title: "CLIMATE",
    icon: temperature,
    items: [
      "Average temperature lies between 25°C to 31°C.  ",
      "Singapore has a tropical  climate defined by high temperatures, high humidity, and rainfall year-round.",
    ],
  },
  {
    title: "CURRENCY",
    icon: userdollar,
    items: ["The currency of Singapore is the Singapore Dollar (SGD)."],
  },
  {
    title: "LANGUAGE",
    icon: language,
    items: [
      "Singapore is a multicultural nation with four official languages:English,Tamil, Malay and Mandarin.",
    ],
  },
  {
    title: "BEST TIME TO VISIT",
    icon: thumbup,
    items: [
      "The best time to visit is from December to June, as this period experiences relatively pleasant weather and numerous events.",
      "However, Singapore’s tropical climate means it’s a year-round destination.",
    ],
  },
];
  
  return (
    <>
     
   <div className="main-banner-common"
                style={{
                  backgroundImage: `url(${singapurbanner})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '720px',
                  width: '100%',
                  objectFit:'contain',
                }}
                >
                <div className="truva-container">
                    <div className="banner-common-title">
                    <h2>Singapore </h2>
           
                </div>
                </div>
                
                </div>


                <div className="main-usa-data">
                        <div className="truva-container">
                          <div className="usainner-block">
                            <div className="usainner-images">
                              <img src={singapurhero} alt="singapurhero" />
                            </div>
                            <div className="usainner-detail">
                              <h2 className=''>Singapore
                                
                  </h2>
             
                              <p>A captivating fusion of the future and nature, Singapore is where iconic skyscrapers meet lush vertical gardens. From the dazzling lights of Marina Bay Sands to the eco-wonders of Gardens by the Bay, this island city-state offers something for everyone. Families can enjoy Sentosa Island, Universal Studios, and the Singapore Zoo, while shopaholics find paradise on Orchard Road and food lovers savor endless street eats at local hawker centers.
                              </p>
                            
                              <p>Whether you're planning a fun-filled family vacation or a sleek city escape, Truva Overseas curates Singapore itineraries that blend modern marvels with cultural treasures like Chinatown, Little India, and Kampong Glam. Explore, indulge, and experience seamless travel with our expertly crafted tour packages tailored to your style.
                
                              </p>
                
                            </div>
                
                
                          </div>
                       
                        </div>
                      </div>
                      <div className="country-card">
                      <div className="truva-container">
                         <CountryInfoCards cards={singaporeCards}  />
                      </div>
                      </div>
                <div className="main-galary-section">
                  <div className="truva-container">
<SingaporeGallary/>
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

export default Singapore;
