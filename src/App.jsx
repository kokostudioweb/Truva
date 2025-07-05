import { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// Import pages and components
import Home from './assets/pages/home';
import AboutUs from './assets/pages/aboutus';
import Header from './header';
import StudentVisa from './assets/pages/studentvisa';
import VisitorVisa from './assets/pages/visitorvisa';
import Immigrate from './assets/pages/immigrate';
import Usa from './assets/pages/studentvisa/usa';
import Uk from './assets/pages/studentvisa/uk';
import Canada from './assets/pages/studentvisa/canada';
import Australia from './assets/pages/studentvisa/australia';
import Europe from './assets/pages/studentvisa/europe';
import International from './assets/pages/International';
import Domestic from './assets/pages/Domestic';
import CanadaWorkVisa from './assets/pages/canadaworkvisa';
import CanadaProgram from './assets/pages/canadaprogram';
import Singapore from './assets/pages/International/Singapore';
import Malaysia from './assets/pages/International/Malaysia';
import Turkey from './assets/pages/International/Turkey';
import Bali from './assets/pages/International/Bali';
import Japan from './assets/pages/International/Japan';
import Dubai from './assets/pages/International/Dubai';
import ScrollToTop from './component/ScrollToTop';
import ContactUs from './assets/pages/contactus';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <ScrollToTop />
      <Header /> {/* Global navigation header */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/studentvisa" element={<StudentVisa/>} />
        <Route path="/visitorvisa" element={<VisitorVisa/>} />
        <Route path="/immigrate" element={<Immigrate/>} />
        <Route path="/usa" element={<Usa/>} />
        <Route path="/canada" element={<Canada/>} />
        <Route path="/uk" element={<Uk/>} />
        <Route path="/australia" element={<Australia/>} />
        <Route path="/Europe" element={<Europe/>} />
        <Route path="/International" element={<International/>} />
        <Route path="/Domestic" element={<Domestic/>} />
        <Route path="/CanadaWorkVisa" element={<CanadaWorkVisa/>} />
        <Route path="/canadaprogram" element={<CanadaProgram/>} />
        <Route path="/singapore" element={<Singapore />} />
        <Route path="/malaysia" element={<Malaysia />} />
        <Route path="/turkey" element={<Turkey/>} />
        <Route path="/bali" element={<Bali/>} />
        <Route path="/japan" element={<Japan/>} />
        <Route path="/dubai" element={<Dubai/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        {/* Add other routes like /contactus, /services, etc. here */}
      </Routes>
    </Router>
  );
}

export default App;
