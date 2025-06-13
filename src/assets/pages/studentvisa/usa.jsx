import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import studentvisabaner from '../../images/studentvisabaner.png';
import usavisa from '../../images/usavisa.png';



const Usa = () => {
  return (
    <>
     <div className="main-usa-page">
    
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
               <h2>USA Student Visa     </h2>
      
           </div>
           </div>
           </div>
           <div className="main-usa-data">
            <div className="truva-container">
           <div className="usainner-block">
            <div className="usainner-images">
              <img src={usavisa} alt="usavisa" />
            </div>
            <div className="usainner-detail">
              <h2>USA Student Visa  </h2>
              <p>The United States is home to over 4,000 universities offering unmatched diversity in
academic programs. With the F-1 Visa, international students can access institutions
like Harvard, MIT, and Stanford. Truva Overseas helps you navigate every step -
university selection, SEVIS registration, visa interviews, and financial documentation.
Our experienced counselors provide comprehensive support to ensure a smooth
transition to life in the USA. Whether you aim to study business, engineering, or liberal
arts, we help turn your academic ambitions into a successful global career.
</p>
<h3>Why Choose the USA for Higher Education?</h3>
<p>The United States continues to be a top destination for students seeking world-class
education, dynamic campus life, and career-focused learning opportunities. Studying in
the US opens doors to innovation, academic diversity, and a globally respected degree.
</p>

            </div>

            
           </div>
           <div className="data-benifit">
            <h3>Benefits of Studying in the USA</h3>

            <div className="data-benefit-usa">
<div>
  <h4>1. High-Quality Education</h4>
<p>With a reputation for academic excellence, institutions in the USA are known for their
research-driven programs, practical learning approaches, and extensive course options
across all fields.
</p>
</div>
<div>
  <h4>2. Global Cultural Experience</h4>
<p>As a multicultural society, the USA offers a unique blend of traditions, ideas, and
perspectives. You'll study alongside peers from across the globe, gaining exposure that
shapes both personal and professional growth.</p>
</div>
<div>
  <h4>3. Career-Ready Pathways</h4>
<p>Students are eligible for part-time work during semesters and full-time work during
academic breaks. After graduation, you can apply for Optional Practical Training (OPT),
gaining hands-on experience in your field of study.
</p>
</div>
<div>
  <h4>4. Safe and Supportive Environment</h4>
<p>International student safety is a key focus across campuses. With dedicated student
support services, you'll feel welcomed, supported, and prepared for success in a new
country.</p>
</div>
<div>
  <h4>5. Access to Research and Innovation</h4>
<p>The USA is home to cutting-edge research and technology. Students benefit from
modern labs, innovation hubs, and opportunities to participate in groundbreaking
projects.</p>
</div>
<div>
  <h4>6. Holistic Development</h4>
<p>Academic learning is balanced with opportunities for leadership, volunteering, athletics,
and social engagement, preparing you for global opportunities beyond the classroom.</p>
</div>
</div>
           </div>
     </div>
     </div>
     </div>

      

      <Footer/>
    </>
  );
};

export default Usa;
