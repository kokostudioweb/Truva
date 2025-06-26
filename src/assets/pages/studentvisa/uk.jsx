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
import jancalender from '../../images/jancalender.svg';
import sepcalender from '../../images/sepcalender.svg';
import fulltime from '../../images/fulltime.svg';
import timeclock from '../../images/timeclock.svg';
import recydency from '../../images/recydency.svg';
import spouseicon from '../../images/spouseicon.svg';
import graguateicon from '../../images/graguateicon.svg';
import computerscienc from '../../images/computerscienc.svg';
import human from '../../images/human.svg';
import helthcare from '../../images/helthcare.svg';
import social from '../../images/social.svg';
import business from '../../images/business.svg';
import technology from '../../images/technology.svg';
import InqueryCommon from '../inquerycommon';



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
      <div className="academic-intact-main">
        <div className="truva-container">
          <div className="academic-intact">
            <div className="content intek-uk">
              <h1>Academic Intakes</h1>
                  <p className="note-title">UK universities offer multiple intake options to <br />
accommodate international students.</p>


              <div className="main-intack-block">

                <div className="intake-wrapper">
                  <div className="intake">
                    <img className="calendar-icon" src={sepcalender} alt="sepcalender" />
                    <div className="intake-text">
                      <strong>Fall</strong>
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

                <p className="note">Some courses may offer additional intakes in May or 
April depending on the institution.</p>
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
              <h2>Popular Programs
in the UK</h2>
              <ul className="criteria-list">
                <li>
                  <span className="checkmark">✔</span>
                Engineering & Technology
                </li>
                <li>
                  <span className="checkmark">✔</span>
                  Business & Management
                </li>
                <li>
                  <span className="checkmark">✔</span>
                 Computer Science & IT
                </li>
                <li>
                  <span className="checkmark">✔</span>
              Medicine & Healthcare
                </li>
                <li>
                  <span className="checkmark">✔</span>
                 Environmental Studies
                </li>
                <li>
                  <span className="checkmark">✔</span>
                 Social Sciences & Humanities
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
              <h2>Types of Degrees 
Offered</h2>
              <div className="program-list">
                <div className="program-item"> Foundation Courses</div>
                <div className="program-item"> Bachelor's Degree (BA/BSc)</div>
                <div className="program-item"> Diploma & Certificate Programs</div>
                <div className="program-item"> Master's Degree (MA/MSc)</div>
                <div className="program-item"> Doctoral Degree (PhD)</div>
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
          <div className="language-section">
            <div className="language-image">
              <img src={language} alt="language" />
            </div>
            <div className="language-text">
              <h2>Language Proficiency <br /> Requirements</h2>
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
      <div className="work-main-section">
        <div className="truva-container">
          <div className="work-inner">
            <div className="work-text">
              <h2>Part-Time Work 
Opportunities</h2>
              <p>International students on a UK Student
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

            <div className="work-image">
              <img src={workimage} alt="workimage" />
            </div>
          </div>
        </div>
      </div>
.
     

      <div className="post-study">
        <div className="truva-container">
          <div className="post-study-inner">
            <div className="post-study-image">
              <img src={poststudy} alt="poststudy" />
            </div>
            <div className="post-study-text">
              <h2>Eligibility Criteria</h2>
              <p>
                Academic entry requirements vary by institution and course,
but students are generally expected to maintain a strong
academic record with at least 50% marks or equivalent in 
previous education.
              </p>
            </div>
          </div>
        </div>
      </div>

<div className="visaoption-section">
  <div className="truva-container">
    <div className="visa-titleuk">
      <h2>Post-Study Opportunities<br />& Visa Options</h2>
    </div>
     <div class="visa-inneroption">
    <div class="visa-text">
      

      <div class="visa-item">
        <div class="icon"><img src={graguateicon} alt="graguateicon" /></div>
        <div>
          <h3>Graduate Route (Post-Study Work Visa)</h3>
          <p>International students who complete an eligible UK degree can stay and work (or look for work) for up to 2 years (or 3 years for PhD graduates) after graduation without needing sponsorship.</p>
        </div>
      </div>

      <div class="visa-item">
        <div class="icon"><img src={spouseicon} alt="spouseicon" /></div>
        <div>
          <h3>Spouse and Dependent Visa</h3>
          <p>Students enrolled in postgraduate programs of 9 months or more may bring their dependents. Spouses may be eligible to work full-time during their stay in the UK.</p>
        </div>
      </div>

      <div class="visa-item">
        <div class="icon"><img src={recydency} alt="recydency" /></div>
        <div>
          <h3>Path to Permanent Residency</h3>
          <p>After gaining work experience under a valid work visa (such as the Skilled Worker visa), international graduates may qualify for settlement options depending on duration and eligibility.</p>
        </div>
      </div>
    </div>

    <div class="visa-image">
      <img src={visaoption} alt="visaoption" />
    </div>
  </div>
  </div>
</div>


      <div className="estementcost">
        <div className="truva-container">
          <div className="eastement-inner">
            <h2>Estimated Monthly Living Costs</h2>
            <p>Living costs in the UK range from GBP 800 to GBP 1,500 per month, depending on your location and lifestyle. This includes accommodation, meals, transportation, utilities, and personal expenses.</p>
          </div>
        </div>
      </div>



      <Footer />
    </>
  );
};

export default Uk;