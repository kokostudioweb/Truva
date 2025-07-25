import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import studenvisa from '../images/studenvisa.png';
import usabg from '../images/usabg.png';
import canadacard from '../images/canadacard.png';
import ukcard from '../images/ukcard.png';
import australiyacard from '../images/australiyacard.png';
import europcard from '../images/europcard.png';
import usaflag from '../images/usaflag.svg';
import canadaflag from '../images/canadaflag.svg';
import ukfag from '../images/ukfag.svg';
import australiyamap from '../images/australiyamap.svg';
import europflag from '../images/europflag.png';
import rightarrow from '../images/rightarrow.svg';

const StudentVisa = () => {

     const navigate = useNavigate();

  return (
    <>
     <div className="main-studentvisa-page">

         <div className="main-banner-common"
     style={{
       backgroundImage: `url(${studenvisa})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       height: '720px',
       width: '100%',
       objectFit:'contain',
     }}
     >
     <div className="truva-container">
         <div className="banner-common-title">
         <h2>Student Visa</h2>

     </div>
     </div>
     </div>
<div className="card-section-main common-card">
    <div className="truva-container">
    <div className="cardblock">
         <div onClick={() => navigate('/usa')}  className="ourservice-inner-card-data">
            <img className='visamain-image' src={usabg} alt="usabg" />
            <div className="serviceinner-card-details">
                <div className="invest-grey-round">
                    <img className='' src={usaflag} alt="usaflag" />
                </div>
              
              <h3>USA</h3>
              <p>Pursue academic excellence in top-ranking American universities with our expert guidance.</p>
              {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
              <button onClick={() => navigate('/usa')} className='flex gap-2 items-center'><span>USA Student Visa </span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
            </div>
              
            </div>
         <div onClick={() => navigate('/canada')} className="ourservice-inner-card-data">
            <img className='visamain-image' src={canadacard} alt="canadacard" />
            <div className="serviceinner-card-details">
                <div className="invest-grey-round">
                    <img className='' src={canadaflag} alt="canadaflag" />
                </div>
              
              <h3>Canada</h3>
              <p> Get access to high-quality education and work opportunities in Canada's student-friendly environment.</p>
              {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
              <button onClick={() => navigate('/canada')} className='flex gap-2 items-center'><span>Canada Student Visa</span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
            </div>
              
            </div>
         <div onClick={() => navigate('/uk')} className="ourservice-inner-card-data">
            <img className='visamain-image' src={ukcard} alt="ukcard" />
            <div className="serviceinner-card-details">
                <div className="invest-grey-round">
                    <img className='' src={ukfag} alt="ukfag" />
                </div>
              
              <h3>UK</h3>
              <p> Study in world-renowned institutions with flexible post-study work options in the UK.</p>
              {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
              <button onClick={() => navigate('/uk')} className='flex gap-2 items-center'><span>UK Student Visa</span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
            </div>
              
            </div>
         <div onClick={() => navigate('/australia')} className="ourservice-inner-card-data">
            <img className='visamain-image' src={australiyacard} alt="australiyacard" />
            <div className="serviceinner-card-details">
                <div className="invest-grey-round">
                    <img className='' src={australiyamap} alt="australiyamap" />
                </div>
              
              <h3>Australia</h3>
              <p> Start your academic journey in Australia with globally recognized degrees and a vibrant lifestyle.</p>
              {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
              <button onClick={() => navigate('/australia')} className='flex gap-2 items-center'><span>Australia Student Visa</span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
            </div>
              
            </div>
         <div onClick={() => navigate('/europe')} className="ourservice-inner-card-data">
            <img className='visamain-image' src={europcard} alt="europcard" />
            <div className="serviceinner-card-details">
                <div className="invest-grey-round">
                    <img className='' src={europflag} alt="europflag" />
                </div>
              
              <h3>Europe</h3>
              <p> Experience diverse cultures and quality education across Europe’s top universities</p>
              {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
              <button onClick={() => navigate('/europe')}  className='flex gap-2 items-center'><span> Europe Student Visa</span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
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

export default StudentVisa;
