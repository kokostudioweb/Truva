import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import truvaheaderlogo from './assets/images/truvaheaderlogo.svg';
import domesticheader from './assets/images/domesticheader.svg';
import internactionheader from './assets/images/internactionheader.svg';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutUsClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/' || location.pathname === '/home') {
      // Already on home, just scroll
      const el = document.getElementById('welcomeabout');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // fallback: update hash, Home's useEffect will handle
        window.location.hash = '#welcomeabout';
      }
    } else {
      navigate('/#welcomeabout');
    }
  };

  const getNavLinkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <div className="main-header-section">
      <div className="truva-container">
        <div className="main-header-inner">
          <Navbar className='button-mobile' expand="lg" >

            <div>
              <Navbar.Brand href="\"><img className='header-logo' src={truvaheaderlogo} alt="truvaheaderlogo" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto main-navbar-data items-center">
                <Nav.Link as={NavLink} to="/" className={getNavLinkClass}>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/#welcomeabout" className={getNavLinkClass} onClick={handleAboutUsClick}>About Us</Nav.Link>
                <NavDropdown title="Visa" id="basic-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to="/studentvisa" className={getNavLinkClass}>Student Visa</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/visitorvisa" className={getNavLinkClass}>Visitor Visa</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/immigrate" className={getNavLinkClass}>Immigrate</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={NavLink} to="/domestic" className={getNavLinkClass}> <span><img src={domesticheader} alt="domesticheader" /></span> Domestic</Nav.Link>
                <Nav.Link as={NavLink} to="/International" className={getNavLinkClass}> <span><img src={internactionheader} alt="internactionheader" /></span> International</Nav.Link>
                <button className="blue-button" onClick={() => navigate('/contactus')}>
                  Contact Us
                </button>
              </Nav>
            </Navbar.Collapse>

          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
