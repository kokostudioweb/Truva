import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import truvaheaderlogo from './assets/images/truvaheaderlogo.svg';

const Header = () => {
   const navigate = useNavigate();

         

  const getNavLinkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <div className="main-header-section">
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
              <Nav.Link as={NavLink} to="/aboutus" className={getNavLinkClass}>About Us</Nav.Link>
              <NavDropdown title="Visa" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/studentvisa" className={getNavLinkClass}>Student Visa</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/visitorvisa" className={getNavLinkClass}>Visitor Visa</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/immigrate" className={getNavLinkClass}>Immigrate</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/immigrate" className={getNavLinkClass}>Immigrate</Nav.Link>
              <Nav.Link as={NavLink} to="/blogs" className={getNavLinkClass}>Tour & Travels</Nav.Link>
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
