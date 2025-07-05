import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import truvaheaderlogo from '../images/truvaheaderlogo.svg';
import immigraticon from '../images/immigraticon.svg';
import studentviicon from '../images/studentviicon.svg';
import visitorvisaicon from '../images/visitorvisaicon.svg';
import rightarrow from '../images/rightarrow.svg';
import truvebanner from '../images/truvebanner.png';
import welcomeone from '../images/welcomeone.png';
import welcometwo from '../images/welcometwo.png';
import studentvisa from '../images/studentvisa.png';
import visitarvisa from '../images/visitarvisa.png';
import immeraction from '../images/immeraction.png';
import holidayimage from '../images/holidayimage.png';
import packageone from '../images/packageone.png';
import packagetwo from '../images/packagetwo.png';
import Footer from './footer';
import TestimonialSlider from '../../component/TestimonialSlider';



const Home = () => {

const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contactus');
  };

  // You can define a function to add active styling:
  const getNavLinkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');


  return (
    <>
    <div className='main-home-page'>
 
    {/* <div className="main-header-section">
        <div className="truva-container">
<div className="main-header-inner">
        <Navbar expand="lg" >
     
       <div>
         <Navbar.Brand href="#home"><img src={truvaheaderlogo} alt="truvaheaderlogo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto main-navbar-data items-center">
           <Nav.Link as={NavLink} to="/" className={getNavLinkClass}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about" className={getNavLinkClass}>About Us</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/investmentservices" className={getNavLinkClass}>Investment Services</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/insuranceservices" className={getNavLinkClass}>Insurance Services</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/taxservices" className={getNavLinkClass}>Tax Services</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/news" className={getNavLinkClass}>News</Nav.Link>
              <Nav.Link as={NavLink} to="/blogs" className={getNavLinkClass}>Blogs</Nav.Link>
              <button className='blue-button' onClick={handleClick}>
                Contact Us
              </button>
          </Nav>
        </Navbar.Collapse>
 
    </Navbar>
</div>

        </div>
    </div> */}
    <div className="main-banner"
style={{
  backgroundImage: `url(${truvebanner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '845px',
  width: '100%',
  objectFit:'contain',
}}
>
<div className="truva-container">
    <div className="banner-detail-title">
    <h2>Your Gateway to Global <br /> Opportunities & Dream <br /> Holidays</h2>
    <p>Empowering your global journey with expert visa solutions and unforgettable travel experiences. From student visas to dream holidays - we handle it all, effortlessly.</p>
    <button className='blue-button-fill' onClick={handleClick}>
                Contact Us
              </button>
</div>
</div>
</div>
<div className="truva-welcome-section">
<div className="truva-container">
    <div className="welcome-block">
        <div className="welcome-image">
            <img className='firstwelcome' src={welcomeone} alt="welcomeone" />
            <img className='secondwelcome' src={welcometwo} alt="welcometwo" />
        </div>
        <div className="welcome-detail">
            <h2>Welcome to Truva Overseas</h2>
            <p>At Truva Overseas, we open doors to new journeys - whether you're looking to study, work, or explore the world. With years of expertise in visa consulting and a curated portfolio of international & domestic travel services, we’re here to guide you through every step of your global aspirations.
Let us make your process smooth, transparent, and truly world-class.</p>
<button className='blue-button-fill' onClick={handleClick}>
                Contact Us
              </button>
        </div>
    </div>
</div>
</div>
<div className="visa-section">
    <div className="truva-container">
    <div className="main-visa-title">
        <h2>Visa</h2>
    </div>
    <div className="visa-card">
        <div className="ourservice-inner-card-data">
    <img className='visamain-image' src={studentvisa} alt="studentvisa" />
    <div className="serviceinner-card-details">
        <div className="invest-grey-round">
            <img className='' src={studentviicon} alt="studentviicon" />
        </div>
      
      <h3>Student Visa</h3>
      <p> Pave the way to global education. We help you choose the right country and course, ensuring your application stands out with expert documentation and support.</p>
      {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
      <button onClick={() => navigate('/studentvisa')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
    </div>
      
    </div>
        <div className="ourservice-inner-card-data">
    <img className='visamain-image' src={visitarvisa} alt="visitarvisa" />
    <div className="serviceinner-card-details">
        <div className="invest-grey-round">
            <img className='' src={visitorvisaicon} alt="visitorvisaicon" />
        </div>
      
      <h3>Visitor Visa</h3>
      <p> Travel with ease, wherever you go. Whether it's a family visit or a vacation abroad, we simplify your visa process so you can enjoy a hassle-free journey.</p>
      {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
      <button onClick={() => navigate('/visitorvisa')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
    </div>
      
    </div>
        <div className="ourservice-inner-card-data">
    <img className='visamain-image' src={immeraction} alt="immeraction" />
    <div className="serviceinner-card-details">
        <div className="invest-grey-round">
            <img className='' src={immigraticon} alt="immigraticon" />
        </div>
      
      <h3>Immigration Visa</h3>
      <p> Start your new life with confidence. From permanent residency to skilled migration, we assist you in building a future overseas with trusted end-to-end consultancy.</p>
      {/* <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
      <button onClick={() => navigate('/immigrate')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={rightarrow} alt="rightarrow" /></span></button>
    </div>
      
    </div>
     </div>
    
</div>
</div>
 <div className="packgeshighlit"
     style={{
  backgroundImage: `url(${holidayimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '543px',
  width: '100%',
  objectFit:'contain',
}}
     >
        <div className="truva-container">
        <div className="packages-data">
            <div className="packeges-detail">
                <h3>International & Domestic <br /> Holidays</h3>
                <p>Curated holidays, unforgettable memories. From exotic international escapes to soul-refreshing domestic getaways, we design travel experiences tailored to your interests, budget, and dreams.</p>
                <div className="button-block">
                    <button className='white-button' onClick={() => navigate('/International')}>
                International Holidays
              </button>
              <button className='white-button' onClick={() => navigate('/Domestic')}>
                Domestic Holidays
              </button>
                </div>
            </div>
            <div className="images-package">
                <img className='packageone' src={packageone} alt="packageone" />
                <img className='packagetwo' src={packagetwo} alt="packagetwo" />
            </div>
        </div>
        </div>
     </div>
     {/* <div className="whychooes-section">
      <div className="main-visa-title">
        <h2>Why Choose Us</h2>
    </div>
     </div> */}
     <div className="testmonial-section">
      <div className="truva-container">
      <div className="main-visa-title">
        <h2>Testimonials</h2>
    </div>
    <TestimonialSlider/>
     </div>
</div>
     <Footer/>
    </div>
   
    </>
  );
};

export default Home;