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
import julcalender from '../../images/julcalender.svg';
import fabcalender from '../../images/fabcalender.svg';
import fulltime from '../../images/fulltime.svg';
import timeclock from '../../images/timeclock.svg';
import recydency from '../../images/recydency.svg';
import spouseicon from '../../images/spouseicon.svg';
import graguateicon from '../../images/graguateicon.svg';



const Australia = () => {
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
            <h2>Australia Student Visa     </h2>

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
              <h2 className=''>Australia Student Visa     </h2>
              <p>Australia’s Subclass 500 student visa lets you enroll in leading institutions with the
                advantage of working while studying. The country is known for its high quality of life,
                safety, and research-focused education. Truva Overseas helps with admissions,
                Genuine Temporary Entrant (GTE) statements, OSHC insurance, and visa filing. With a
                strong economy and post-study work options, Australia offers both educational
                excellence and future career opportunities. Let us make your Australian education
                journey seamless and successful.
              </p>
              <h3>Why Choose Australia for Your Higher Education? </h3>
              <p>Australia is a leading global education hub, offering a vibrant learning environment, globally
                recognized qualifications, and a multicultural lifestyle. With world-class infrastructure, advanced
                research facilities, and welcoming communities, Australia has become one of the top
                destinations for international students.
              </p>

            </div>


          </div>
          <div className="data-benifit">
            <h3>Key Benefits of Studying in Australia</h3>

            <div className="data-benefit-usa">
              <div>
                <h4>1. Wide Range of Courses and Institutions </h4>
                <p>Australia offers over 22,000 courses across 1,100+ institutions, giving students a broad
                  spectrum of options to match their academic and career goals.
                </p>
              </div>
              <div>
                <h4>2. Globally Recognized Education </h4>
                <p>Australian degrees are highly regarded worldwide and open doors to international career
                  opportunities.
                </p>
              </div>
              <div>
                <h4>3. Outstanding Student Life </h4>
                <p>Australia is known for its safe, friendly, and multicultural environment. Students enjoy high
                  standards of living, excellent public services, and a strong support system for international
                  learners.
                </p>
              </div>
              <div>
                <h4>4. Scholarships & Financial Aid </h4>
                <p>A variety of government and institutional scholarships are available to international
                  students, helping ease financial pressure and reward academic excellence.</p>
              </div>
              <div>
                <h4>5. Post-Study Work Opportunities  </h4>
                <p>International graduates can stay and work in Australia for up to 2 years (or longer
                  depending on the course and location), offering valuable professional experience in a global job
                  market.  </p>
              </div>
              <div>
                <h4>6. Pathway to Permanent Residency </h4>
                <p>With post-study work rights and immigration pathways, Australia offers long-term opportunities
                  for those looking to build a career and life abroad.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="academic-intact-main">
        <div className="truva-container">
          <div className="academic-intact">
            <div className="content intek-uk">
              <h1>Popular Intake Periods </h1>
              <p className="note-title">Australia offers two major academic intakes</p>


              <div className="main-intack-block">

                <div className="intake-wrapper">
                  <div className="intake">
                    <img className="calendar-icon" src={fabcalender} alt="fabcalender" />
                    <div className="intake-text">
                      <strong>Primary Intake</strong>

                    </div>
                  </div>

                  <div className="intake">
                    <img className="calendar-icon" src={julcalender} alt="julcalender" />
                    <div className="intake-text">
                      <strong>Secondary Intake</strong>

                    </div>
                  </div>
                </div>

                <p className="note">Some institutions may offer additional intakes in
                  November or March, depending on the course.</p>
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
              <h2>Popular Courses Among International Students </h2>
              <ul className="criteria-list">
                <li>
                  <span className="checkmark">✔</span>
                 Engineering 
                </li>
                <li>
                  <span className="checkmark">✔</span>
                 Business and Management 
                </li>
                <li>
                  <span className="checkmark">✔</span>
                  Computer Science and IT 
                </li>
                <li>
                  <span className="checkmark">✔</span>
                 Arts and Humanities 
                </li>
                <li>
                  <span className="checkmark">✔</span>
                   Medicine and Healthcare
                </li>
                <li>
                  <span className="checkmark">✔</span>
                  Social Sciences 
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
              <h2>Degrees Offered in Australia</h2>
              <div className="program-list">
                <div className="program-item"> Bachelor's Degree</div>
                <div className="program-item"> Master's Degree </div>
                <div className="program-item"> Doctoral Degree (PhD) </div>
                <div className="program-item"> Associate Degree </div>
                <div className="program-item"> Certificate and Diploma Programs (PhD)</div>
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
              <h2>English Language  <br /> Requirements</h2>
              <p className='language-text-line'>International students must demonstrate English proficiency through recognized tests. Common 
requirements include: </p>
              <table>
                <tr>
                  <td>IELTS</td>
                  <td><strong>6.0 overall (varies by course)</strong></td>
                </tr>
                <tr>
                  <td>TOEFL iBT</td>
                  <td><strong>60–80</strong></td>
                </tr>
                <tr>
                  <td>PTE </td>
                  <td><strong>50–58</strong></td>
                </tr>

              </table>
              <p><b>Note:</b> Other English language tests may also be 
          accepted.</p>
            </div>
          </div>
        </div>
      </div>

<div className="subclass-section">
  <div className="truva-container"></div>
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

export default Australia;