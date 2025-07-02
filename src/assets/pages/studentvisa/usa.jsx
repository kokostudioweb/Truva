import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import studentvisabaner from '../../images/studentvisabaner.png';
import usavisa from '../../images/usavisa.png';
import languageimg from '../../images/languageimg.png';
import usamap from '../../images/usamap.png';
import jancalender from '../../images/jancalender.svg';
import sepcalender from '../../images/sepcalender.svg';
import fulltime from '../../images/fulltime.svg';
import timeclock from '../../images/timeclock.svg';
import computer from '../../images/computer.svg';
import medicine from '../../images/medicine.svg';
import socialscience from '../../images/socialscience.svg';
import Businessimg from '../../images/Businessimg.svg';
import engtechnology from '../../images/engtechnology.svg';
import artimg from '../../images/artimg.svg';
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
        <div className="programs-offered">
          <div className="truva-container">
            <div className="programs-offered-common">
              <div className="image-box">
                <img src={usamap} alt="USA Map" />
              </div>
              <div className="content-box">
                <h2>Programs Offered</h2>
                <ul>
                  <li> Bachelor's Degrees</li>
                  <li> Doctoral Programs</li>
                  <li> Associate Degrees</li>
                  <li> Master's Degrees</li>
                  <li> Certificate & Diploma Programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="acadamic-datablock">
          <div className="truva-container">
            <div className="acadamic-grid">
              <div className="acadamic-detail">
                <div className="acadamictext-section">
                  <h2>Academic Intakes</h2>
                  <div className="content">



                    <div className="main-intack-block">

                      <div className="intake-wrapper">
                        <div className="intake">
                          <img className="calendar-icon" src={sepcalender} alt="sepcalender" />
                          <div className="intake-text">
                            <strong>Fall Intake </strong>
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

                      <p className="note">Additional sessions may be available based on program
                        and institution.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="eligliblity-detail">
                <div className="acadamictext-section">
                  <h2>Eligibility Criteria</h2>
                  <div className="text-section">
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
          </div>
        </div>
        <div className="main-language-section">
          <div className="truva-container">
            <div className="language-section">
              <div className="language-image">
                <img src={languageimg} alt="languageimg" />
              </div>
              <div className="language-text">
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

<div className="popular-fuildmain">
  <div className="truva-container">
      <div className="fields-section">
    <h2 className="title">Popular Fields Of Study</h2>
    <div className="grid">
      <div className="field">
        <img src={computer} alt="Computer Science & IT"/>
        <p>Computer Science & IT</p>
      </div>
      <div className="field">
        <img src={medicine} alt="Medicine & Healthcare"/>
        <p>Medicine & Healthcare</p>
      </div>
      <div className="field">
        <img src={socialscience} alt="Social Sciences"/>
        <p>Social Sciences</p>
      </div>
      <div className="field">
        <img src={Businessimg} alt="Business & Management"/>
        <p>Business & Management</p>
      </div>
      <div className="field">
        <img src={engtechnology} alt="Engineering & Technology"/>
        <p>Engineering & Technology</p>
      </div>
      <div className="field">
        <img src={artimg} alt="Art & Humanities"/>
        <p>Art & Humanities</p>
      </div>
    </div>
  </div>
 
  </div>
</div>
  <div className="acadamic-datablock work-opperctunity-detail">
          <div className="truva-container">
            <div className="acadamic-grid">
              <div className="acadamic-detail">
                <div className="">
                  
                  <div className="work-text">
                <h2>Work Opportunities</h2>
                <p>International Students can work</p>

                <div className="work-item">
                  <div className="icon-circle"><img src={timeclock} alt="timeclock" /></div>
                  <div>
                    <strong className="work-title">Up to 20 hours/week</strong><br />
                    <span className="work-subtext">During academic sessions</span>
                  </div>
                </div>

                <div className="work-item">
                  <div className="icon-circle hourglass"><img src={fulltime} alt="fulltime" /></div>
                  <div>
                    <strong className="work-title">Full Time</strong><br />
                    <span className="work-subtext">During vacation or semester breaks</span>
                  </div>
                </div>
              </div>
                </div>
              </div>
              <div className="eligliblity-detail">
                <div className="acadamictext-section">
                    <h2>Post Study Options</h2>
                  <div className="post-study-text">
              
                <p>
                  Graduates can apply for OPT (Optional Practical Training), allowing up to 12 months of work in the USA.
                  STEM graduates may be eligible for an additional 24-month extension.
                  Many students leverage this period to secure long-term employment or transition to work-based visa categories.
                </p>
              </div>
                </div>
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
        <InqueryCommon />
      </div>

      <Footer />
    </>
  );
};

export default Usa;
