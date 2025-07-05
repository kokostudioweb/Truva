import React from 'react';
import { useNavigate } from 'react-router-dom';
import canadaprbanner from '../images/canadaprbanner.png';
import Footer from './footer';
import canadaprhero from '../images/canadaprhero.png';
import InqueryCommon from './inquerycommon';



const CanadaProgram = () => {
  return (
    <>
     

    

                 <div className="main-usa-page">
                    
                       <div className="main-banner-common"
                           style={{
                             backgroundImage: `url(${canadaprbanner})`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center',
                             height: '720px',
                             width: '100%',
                             objectFit:'contain',
                           }}
                           >
                           <div className="truva-container">
                               <div className="banner-common-title">
                               <h2>Canada PR      </h2>
                      
                           </div>
                           </div>
                           </div>
                           <div className="main-usa-data">
                            <div className="truva-container">
                           <div className="usainner-block">
                            <div className="usainner-images">
                              <img src={canadaprhero} alt="canadaprhero" />
                            </div>
                            <div className="usainner-detail">
                              <h2>Canada PR Program   </h2>
                              <p>The Canadian Permanent Residency program is one of the most structured immigration 
pathways in the world. Through Express Entry, PNP, or sponsorship categories, skilled 
professionals can secure long-term residency and eventually citizenship. Truva 
evaluates your eligibility, improves your CRS score, helps with ECA and IELTS 
preparation, and manages complete PR documentation. From profile creation to landing 
assistance, our end-to-end support ensures your PR dream is accomplished smoothly 
and efficiently. 
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

export default CanadaProgram;