import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import studentvisabaner from '../../images/studentvisabaner.png';
import usavisa from '../../images/usavisa.png';
import acadamic from '../../images/acadamic.png';
import eligliblityimg from '../../images/eligliblityimg.png';
import programs from '../../images/programs.png';
import language from '../../images/language.png';
import workimage from '../../images/workimage.png';
import poststudy from '../../images/poststudy.png';
import jancalender from '../../images/jancalender.svg';
import sepcalender from '../../images/sepcalender.svg';
import fulltime from '../../images/fulltime.svg';
import timeclock from '../../images/timeclock.svg';
import computerscienc from '../../images/computerscienc.svg';
import human from '../../images/human.svg';
import helthcare from '../../images/helthcare.svg';
import social from '../../images/social.svg';
import business from '../../images/business.svg';
import technology from '../../images/technology.svg';
import InqueryCommon from '../inquerycommon';



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
            objectFit: 'contain',
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
                <h2 className=''>USA Student Visa  </h2>
                <p>The United States is home to over 4,000 universities offering unmatched diversity in
                  academic programs. With the F-1 Visa, international students can access institutions
                  like Harvard, MIT, and Stanford. Truva Overseas helps you navigate every step -
                  university selection, SEVIS registration, visa interviews, and financial documentation.
                  Our experienced counselors provide comprehensive support to ensure a smooth
                  transition to life in the USA. Whether you aim to study business, engineering, or liberal
                  arts, we help turn your academic ambitions into a successful global career.
                </p>
                <h3>Why Choose the USA for Higher Education?</h3>
                <p>The United States continues to be a top destination for students seeking world-className
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
        <div className="academic-intact-main">
          <div className="truva-container">
            <div className="academic-intact">
              <div className="content">
                <h1>Academic Intakes</h1>


                <div className="main-intack-block">

                  <div className="intake-wrapper">
                    <div className="intake">
                      <img className="calendar-icon" src={sepcalender} alt="sepcalender" />
                      <div className="intake-text">
                        <strong>Fall Intake</strong>
                        Primary and most popular intake
                      </div>
                    </div>

                    <div className="intake">
                      <img className="calendar-icon" src={jancalender} alt="jancalender" />
                      <div className="intake-text">
                        <strong>Spring Intake</strong>
                        Secondary option for many programs
                      </div>
                    </div>
                  </div>

                  <p className="note">Additional sessions may be available based on program <br /> and institution.</p>
                </div>
              </div>

              <div className="image">
                <img src={acadamic} alt="acadamic" />
              </div>
            </div>
          </div>
        </div>
        <div className="eligliblity-main">
          <div className="truva-container">
            <div className="main-grid-common">
             <div className="image-section">
      <img src={eligliblityimg} alt="eligliblityimg" />
    </div>
    <div className="text-section">
      <h2>Eligibility Criteria</h2>
      <ul className="criteria-list">
        <li>
          <span className="checkmark">✔</span>
          Minimum of 50% academic score in previous studies
        </li>
        <li>
          <span className="checkmark">✔</span>
          Strong English language proficiency
        </li>
        <li>
          <span className="checkmark">✔</span>
          A valid passport and financial proof for tuition and living expenses
        </li>
      </ul>
    </div>
    </div>
          </div>
        </div>
<div className="main-program-section">
  <div className="truva-container">
     <div className="programs-inner">
    <div className="programs-text">
      <h2>Programs Offered</h2>
      <div className="program-list">
        <div className="program-item"> Associate Degrees</div>
        <div className="program-item"> Bachelor’s Degrees</div>
        <div className="program-item"> Certificate & Diploma Programs</div>
        <div className="program-item"> Master’s Degrees</div>
        <div className="program-item"> Doctoral Programs</div>
      </div>
    </div>
    <div className="programs-image">
      <img src={programs} alt="programs" />
    </div>
  </div>
  </div>
</div>


<div className="main-language-section">
  <div className="truva-container">
    <div class="language-section">
    <div class="language-image">
      <img src={language} alt="language"/>
    </div>
    <div class="language-text">
      <h2>Language Proficiency <br /> Requirements</h2>
      <table>
        <tr>
          <td>IELTS</td>
          <td><strong>6.5 overall</strong></td>
        </tr>
        <tr>
          <td>TOEFL iBT</td>
          <td><strong>80+</strong></td>
        </tr>
        <tr>
          <td>PTE Academic</td>
          <td><strong>53+</strong></td>
        </tr>
        <tr>
          <td>Duolingo</td>
          <td><strong>105+</strong></td>
        </tr>
      </table>
    </div>
  </div>
  </div>
</div>
<div className="work-main-section">
  <div className="truva-container">
     <div className="work-inner">
    <div className="work-text">
      <h2>Work Opportunities</h2>
      <p>International Students can work</p>

      <div className="work-item">
        <div className="icon-circle"><img src={timeclock} alt="timeclock" /></div>
        <div>
          <strong className="work-title">Up to 20 hours/week</strong><br/>
          <span className="work-subtext">During academic sessions</span>
        </div>
      </div>

      <div className="work-item">
        <div className="icon-circle hourglass"><img src={fulltime} alt="fulltime" /></div>
        <div>
          <strong className="work-title">Full Time</strong><br/>
          <span className="work-subtext">During vacation or semester breaks</span>
        </div>
      </div>
    </div>

    <div className="work-image">
      <img src={workimage} alt="workimage"/>
    </div>
  </div>
  </div>
</div>

<div className="popularstudy-main">
  <div className="truva-container">
    <div class="fields-inner">
    <h2>Popular Fields Of Study</h2>
    <div class="fields-grid">
      <div class="field-card">
        <img src={computerscienc} alt="computerscienc" />
        <p>Computer Science<br/>& <br /> IT</p>
      </div>
      <div class="field-card">
        <img src={human} alt="human" />
        <p>Arts<br/>& <br /> Humanities</p>
      </div>
      <div class="field-card">
        <img src={helthcare} alt="helthcare" />
        <p>Healthcare<br/>& <br /> Medicine</p>
      </div>
      <div class="field-card">
        <img src={social} alt="social" />
        <p>Social Sciences</p>
      </div>
      <div class="field-card">
        <img src={business} alt="business" />
        <p>Business<br/>& <br /> Management</p>
      </div>
      <div class="field-card">
        <img src={technology} alt="technology" />
        <p>Engineering<br/>& <br /> Technology</p>
      </div>
    </div>
  </div>
  </div>
</div>

<div className="post-study">
  <div className="truva-container">
    <div class="post-study-inner">
    <div class="post-study-image">
      <img src={poststudy} alt="poststudy" />
    </div>
    <div class="post-study-text">
      <h2>Post Study Options</h2>
      <p>
        Graduates can apply for OPT (Optional Practical Training), allowing up to 12 months of work in the USA. 
        STEM graduates may be eligible for an additional 24-month extension. 
        Many students leverage this period to secure long-term employment or transition to work-based visa categories.
      </p>
    </div>
  </div>
  </div>
</div>
<div className="estementcost">
  <div className="truva-container">
    <div className="eastement-inner">
      <h2>Estimated Monthly Living Costs</h2>
      <p>USD 800 to USD 1,500 depending on city and lifestyle – includes housing, food, local travel, and miscellaneous expenses.</p>
    </div>
  </div>
</div>



      </div>


<div>
<InqueryCommon/>
</div>

      <Footer />
    </>
  );
};

export default Usa;
