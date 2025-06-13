import { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
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
        {/* Add other routes like /contactus, /services, etc. here */}
      </Routes>
    </Router>
  );
}

export default App;
