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
import visaoption from '../../images/visaoption.png';
import ukmap from '../../images/ukmap.png';
import uklanguage from '../../images/uklanguage.png';
import jancalender from '../../images/jancalender.svg';
import sepcalender from '../../images/sepcalender.svg';
import fulltime from '../../images/fulltime.svg';
import timeclock from '../../images/timeclock.svg';
import recydency from '../../images/recydency.svg';
import spouseicon from '../../images/spouseicon.svg';
import graguateicon from '../../images/graguateicon.svg';
import socialscience from '../../images/socialscience.svg';
import medicine from '../../images/medicine.svg';
import computer from '../../images/computer.svg';
import Businessimg from '../../images/Businessimg.svg';
import engtechnology from '../../images/engtechnology.svg';
import studies from '../../images/studies.svg';
import workvisa from '../../images/workvisa.svg';
import prvisa from '../../images/prvisa.svg';
import spousevisa from '../../images/spousevisa.svg';




const Uk = () => {
  return (
    <>


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
            <h2>UK Student Visa     </h2>

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
              <h2 className=''>UK Student Visa   </h2>
              <p>The UK’s Tier 4 (General) student visa allows you to study at prestigious universities
                like Oxford, Cambridge, and Imperial College. Known for shorter degree durations and
                high academic standards, the UK is perfect for cost-effective education. Truva assists
                you with CAS letters, visa documentation, and compliance with UKVI regulations. You
                also benefit from a 2-year post-study work visa under the Graduate Route. Let us help
                you study in a globally connected country with rich heritage and top-notch education.
              </p>
              <h3>Why Choose the UK for Higher Education?</h3>
              <p>The United Kingdom is a top destination for international students, renowned for its
                world-class education, multicultural environment, and excellent career prospects. From
                centuries-old academic traditions to cutting-edge research and innovation, the UK offers
                the perfect setting for students to grow academically and professionally.
              </p>

            </div>


          </div>
          <div className="data-benifit">
            <h3>Benefits of Studying in the UK </h3>

            <div className="data-benefit-usa">
              <div>
                <h4>1. Globally Recognized Education </h4>
                <p>UK universities consistently rank among the top institutions globally, offering a rich
                  academic experience guided by leading researchers and scholars.
                </p>
              </div>
              <div>
                <h4>2. Cultural Diversity</h4>
                <p>With students from across the globe, the UK offers a true melting pot of cultures,
                  allowing you to gain international perspectives and develop global connections.</p>
              </div>
              <div>
                <h4>3. Career-Enhancing Work Opportunities </h4>
                <p>International students are permitted to work up to 20 hours per week during term time
                  and full-time during vacations. Upon graduation, eligible students can apply for a
                  post-study work visa, giving them the opportunity to begin their career in the UK.
                </p>
              </div>
              <div>
                <h4>4. Safe and Welcoming Environment</h4>
                <p>The UK is known for its student-friendly cities, low crime rates, and strong emphasis on
                  safety, making it an ideal environment to study and live.</p>
              </div>
              <div>
                <h4>5. Research and Innovation Hub </h4>
                <p>Students have access to world-class research facilities, modern infrastructure, and
                  opportunities to engage in cutting-edge projects across various disciplines. </p>
              </div>
              <div>
                <h4>6. Supportive Academic Ecosystem</h4>
                <p>UK institutions emphasize personal development alongside academic achievement.
                  You’ll find a nurturing learning environment that encourages critical thinking and
                  innovation.</p>
              </div>
              <div>
                <h4>7. International Recognition</h4>
                <p>A degree from the UK is highly respected and opens doors to global career
                  opportunities. Graduates are well-prepared to enter diverse industries with strong
                  professional credentials.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="programs-offered">
        <div className="truva-container">
          <div className="programs-offered-common">
            <div className="image-box">
              <img src={ukmap} alt="UK Map" />
            </div>
            <div className="content-box">
              <h2>Programs Offered</h2>
              <ul>
                <li>Diploma & Certificate Programs</li>
                <li>Bachelor's Degree (BA/BSc)</li>
                <li> Master's Degree (MA/MSc)</li>
                <li> Doctoral Degree (PhD)</li>
                <li> Foundation Courses</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="acadamic-datablock  canadapage-datablock">
        <div className="truva-container">
          <div className="acadamic-grid">
            <div className="acadamic-detail">
              <div className="">


                <div className="content intek-uk">
                  <h1>Academic Intakes</h1>
                  <p className="note-title">UK universities offer multiple intake options to <br />
                    accommodate international students.</p>


                  <div className="main-intack-block">

                    <div className="intake-wrapper">
                      <div className="intake">
                        <img className="calendar-icon" src={sepcalender} alt="sepcalender" />
                        <div className="intake-text">
                          <strong>Fall  </strong>
                          Main intake
                        </div>
                      </div>


                      <div className="intake">
                        <img className="calendar-icon" src={jancalender} alt="jancalender" />
                        <div className="intake-text">
                          <strong>Winter</strong>
                          Secondary intake
                        </div>
                      </div>

                    </div>

                    <p className="note">Some courses may offer additional intakes in <b>May or
                      April</b> depending on the institution.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="eligliblity-detail">
              <div className="">

                <div className="work-text">
                  <h2>Part-Time Work
                    Opportunities</h2>
                  <p> International students on a UK Student
                    Visa are allowed to work.</p>

                  <div className="work-item">
                    <div className="icon-circle"><img src={timeclock} alt="timeclock" /></div>
                    <div>
                      <strong className="work-title">Up to 20 hours/week</strong><br />
                      <span className="work-subtext">during academic terms</span>
                    </div>
                  </div>

                  <div className="work-item">
                    <div className="icon-circle hourglass"><img src={fulltime} alt="fulltime" /></div>
                    <div>
                      <strong className="work-title">Full Time</strong><br />
                      <span className="work-subtext">This provides students with valuable
                        experience and financial support while
                        studying.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popular-fuildmain">
              <div className="truva-container">
                <div className="fields-section">
                  <h2 className="title">Popular Programs</h2>
                  <div className="grid">
                    <div className="field">
                      <img src={engtechnology} alt="engtechnology" />
                      <p>Engineering & Technology</p>
                    </div>
                    <div className="field">
                      <img src={Businessimg} alt="Businessimg" />
                      <p>Business & Management</p>
                    </div>
                    <div className="field">
                      <img src={computer} alt="computer" />
                      <p>Computer Science & IT</p>
                    </div>
                    <div className="field">
                      <img src={medicine} alt="medicine" />
                      <p>Medicine & Healthcare</p>
                    </div>
                    <div className="field">
                      <img src={studies} alt="studies" />
                      <p>Environmental Studies</p>
                    </div>
                    <div className="field">
                      <img src={socialscience} alt="socialscience" />
                      <p>Social Sciences & Humanities</p>
                    </div>
                  </div>
                </div>
      
              </div>
            </div>

  <div className="main-language-section canada-language">
        <div className="truva-container">
          <div className="language-section">
            <div className="language-image">
              <img src={uklanguage} alt="uklanguage" />
            </div>
            <div className="language-text">
              <h2>Eligibility Criteria</h2>
              <p className='note-title'>Academic entry requirements vary by institution and course,
but students are generally expected to maintain a strong
academic record with at least 50% marks or equivalent in 
previous education.</p>
              <h3>Language Proficiency Requirements</h3>
              <p className='note-title'>Applicants are required to demonstrate English language proficiency through one of the following</p>

              <table>
                <tr>
                  <td>IELTS</td>
                  <td><strong>6.0 overall (varies by course)</strong></td>
                </tr>
                <tr>
                  <td>TOEFL iBT</td>
                  <td><strong>80+</strong></td>
                </tr>
                <tr>
                  <td>PTE </td>
                  <td><strong>50+</strong></td>
                </tr>

              </table>
              <p><b>Note:</b> Specific course and institution requirements
                may differ.</p>
            </div>
          </div>
        </div>
      </div>
<div className="main-visaoption">
  <div className="truva-container">
 <div class="visamain-detail">
  <div class="visa-section-main">
    <h2 class="section-title">Post-Study Opportunities & Visa Options</h2>
    <div class="visa-gridblock">
      <div class="visa-card">
        <div className='visa-card-image'>
          <img src={workvisa} alt="Graduate Route" />
        </div>
        <h3>Graduate Route (Post-Study Work Visa)</h3>
        <p>
          International students who complete an eligible UK degree can stay and work (or look for work)
          for up to 2 years (or 3 years for PhD graduates) after graduation without needing sponsorship.
        </p>
      </div>
      <div class="visa-card">
        <div className="visa-card-image">
        <img src={spousevisa} alt="Spouse and Dependent Visa" />
        </div>
        <h3>Spouse and Dependent Visa</h3>
        <p>
          Students enrolled in postgraduate programs of 9 months or more may bring their dependents.
          Spouses may be eligible to work full-time during their stay in the UK.
        </p>
      </div>
      <div class="visa-card">
        <div className="visa-card-image">
        <img src={prvisa} alt="Path to Permanent Residency" />
        </div>
        <h3>Path to Permanent Residency</h3>
        <p>
          After gaining work experience under a valid work visa (such as the Skilled Worker visa),
          international graduates may qualify for settlement options depending on duration and eligibility.
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
            <h2>Estimated Monthly Cost of Living</h2>
            <p>Living costs in the UK range from GBP 800 to GBP 1,500 per month, depending on your location and lifestyle. This includes accommodation, meals, transportation, utilities, and personal expenses.</p>
          </div>
        </div>
      </div>
 








   



      <Footer />
    </>
  );
};

export default Uk;