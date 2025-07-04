import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import immigratebanner from '../images/immigratebanner.png';
import usabg from '../images/usabg.png';
import usaflag from '../images/usaflag.svg';
import rightarrow from '../images/rightarrow.svg';
import studentvisa from '../images/studentvisa.png';
import studentlogo from '../images/studentlogo.svg';
import bagicon from '../images/bagicon.svg';
import visitarvisa from '../images/visitarvisa.png';
import immeraction from '../images/immeraction.png';

const Immigrate = () => {
  const navigate = useNavigate();
  return (
   <>
     <div className="main-immigrate-page">

         <div className="main-banner-common"
     style={{
       backgroundImage: `url(${immigratebanner})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       height: '720px',
       width: '100%',
       objectFit:'contain',
     }}
     >
     <div className="truva-container">
         <div className="banner-common-title">
         <h2>Immigrate </h2>

     </div>
     </div>
     </div>

<div className="visa-section">
    <div className="truva-container-immigrate">
   
    
    <div className="visa-card">
  
        <div className="ourservice-inner-card-data">
    <img className='visamain-image' src={studentvisa} alt="studentvisa" />
    <div className="serviceinner-card-details">
        <div className="invest-grey-round">
            <img className='' src={bagicon} alt="bagicon" />
        </div>
      
      <h3>Canada Work Visa</h3>
      <p> Work and live in Canada with the right LMIA-based work visa. We help
professionals and skilled workers fast-track their move legally and confidently</p>
      {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
      <button onClick={() => navigate('/canadaworkvisa')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
    </div>
      
    </div>
        <div className="ourservice-inner-card-data">
    <img className='visamain-image' src={visitarvisa} alt="visitarvisa" />
    <div className="serviceinner-card-details">
        <div className="invest-grey-round">
            <img className='' src={bagicon} alt="bagicon" />
        </div>
      
      <h3>Canada PR Program
</h3>
      <p> Settle in Canada permanently via Express Entry, PNP, or family sponsorship. Truva simplifies your dream of Canadian citizenship and long-term residency.</p>
      {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
      <button onClick={() => navigate('/canadaprogram')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
    </div>
      
    </div>
 
     </div>
    
</div>
</div>

      <Footer />
      </div>
    </>
  );
};

export default Immigrate;
