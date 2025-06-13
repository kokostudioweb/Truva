import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import studentvisabaner from '../images/studentvisabaner.png';
import InqueryCommon from './inquerycommon';
import visitarvisa from '../images/visitarvisa.png';
import immeraction from '../images/immeraction.png';
import studentvisa from '../images/studentvisa.png';
import singapur from '../images/singapur.png';
import duai from '../images/duai.png';
import japan from '../images/japan.png';
import bali from '../images/bali.png';
import malaysia from '../images/malaysia.png';
import turkey from '../images/turkey.png';
import rightarrow from '../images/rightarrow.svg';

const International = () => {

  const navigate = useNavigate();
  return (
    <>
     <div className="international-main">
   <div className="main-banner-common"
                style={{
                  backgroundImage: `url(${studentvisabaner})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '845px',
                  width: '100%',
                  objectFit:'contain',
                }}
                >
                <div className="truva-container">
                    <div className="banner-common-title">
                    <h2>International Holiday Packages </h2>
           
                </div>
                </div>
                </div>
                <div className="truva-container">
 <div className="visa-card">
        <div className="ourservice-inner-card-data">
    <img className='visamain-image' src={singapur} alt="singapur" />
    <div className="serviceinner-card-details">
        <div className="invest-grey-round">
            {/* <img className='' src={studentlogo} alt="sstudentlogo" /> */}
        </div>
      
      <h3>Singapore </h3>
      <p> A futuristic skyline, shopping bliss, and family-friendly attractions await in this island city-state.</p>
      {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
      <button onClick={() => navigate('/studentvisa')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
    </div>
    </div>
        <div className="ourservice-inner-card-data">
    <img className='visamain-image' src={duai} alt="duai" />
    <div className="serviceinner-card-details">
        <div className="invest-grey-round">
            {/* <img className='' src={studentlogo} alt="sstudentlogo" /> */}
        </div>
      
      <h3>Dubai </h3>
      <p> Luxury, adventure, and desert thrills combine in this dynamic Middle Eastern gem.</p>
      {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
      <button onClick={() => navigate('/visitorvisa')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
    </div>
      
    </div>
        <div className="ourservice-inner-card-data">
    <img className='visamain-image' src={japan} alt="japan" />
    <div className="serviceinner-card-details">
        <div className="invest-grey-round">
            {/* <img className='' src={studentlogo} alt="sstudentlogo" /> */}
        </div>
      
      <h3>Japan </h3>
      <p>  Culture, technology, and cherry blossoms form the perfect travel experience.</p>
      {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
      <button onClick={() => navigate('/immigrate')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
    </div>
      
    </div>
        <div className="ourservice-inner-card-data">
    <img className='visamain-image' src={bali} alt="bali" />
    <div className="serviceinner-card-details">
        <div className="invest-grey-round">
            {/* <img className='' src={studentlogo} alt="sstudentlogo" /> */}
        </div>
      
      <h3>Bali</h3>
      <p>Serene beaches, spiritual temples, and lush nature for soul-soothing escapes.
</p>
      {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
      <button onClick={() => navigate('/studentvisa')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
    </div>
    </div>
        <div className="ourservice-inner-card-data">
    <img className='visamain-image' src={malaysia} alt="malaysia" />
    <div className="serviceinner-card-details">
        <div className="invest-grey-round">
            {/* <img className='' src={studentlogo} alt="sstudentlogo" /> */}
        </div>
      
      <h3>Malaysia</h3>
      <p> A cultural mosaic of cuisines, skyscrapers, and tropical beauty.</p>
      {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
      <button onClick={() => navigate('/visitorvisa')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
    </div>
      
    </div>
        <div className="ourservice-inner-card-data">
    <img className='visamain-image' src={turkey} alt="turkey" />
    <div className="serviceinner-card-details">
        <div className="invest-grey-round">
            {/* <img className='' src={studentlogo} alt="sstudentlogo" /> */}
        </div>
      
      <h3>Turkey</h3>
      <p> Where East meets West - explore ancient ruins, bazaars, and exotic cuisine.</p>
      {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
      <button onClick={() => navigate('/immigrate')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
    </div>
      
    </div>
     </div>
</div>
             <div>
                  <InqueryCommon/>
                </div>
      <Footer />
      </div>
    </>
  );
};

export default International;
