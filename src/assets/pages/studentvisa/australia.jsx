import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import australiyabanner from '../../images/australiyabanner.png';
import aushero from '../../images/aushero.png';
import acadamic from '../../images/acadamicimg.png';
import eligliblityimg from '../../images/eligliblityimg.png';
import programs from '../../images/programs.png';
import language from '../../images/language.png';
import workimage from '../../images/workimage.png';
import poststudy from '../../images/poststudy.png';
import visaoption from '../../images/visaoption.png';
import ausmap from '../../images/ausmap.png';
import auslanguage from '../../images/auslanguage.png';
import visarequermeant from '../../images/visarequermeant.png';
import julcalender from '../../images/julcalender.svg';
import fabcalender from '../../images/fabcalender.svg';
import fulltime from '../../images/unlimitedhour.svg';
import timeclock from '../../images/48hourse.svg';
import recydency from '../../images/recydency.svg';
import spouseicon from '../../images/spouseicon.svg';
import graguateicon from '../../images/graguateicon.svg';
import medicine from '../../images/medicine.svg';
import computer from '../../images/computer.svg';
import Businessimg from '../../images/Businessimg.svg';
import engtechnology from '../../images/engtechnology.svg';
import socialscience from '../../images/socialscience.svg';
import artimg from '../../images/artimg.svg';



const Australia = () => {
  return (
    <>


      <div className="main-banner-common"
        style={{
          backgroundImage: `url(${australiyabanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '720px',
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
              <img src={aushero} alt="aushero" />
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
      <div className="programs-offered">
        <div className="truva-container">
          <div className="programs-offered-common">
            <div className="image-box">
              <img src={ausmap} alt="AUS Map" />
            </div>
            <div className="content-box">
              <h2>Degrees Offered in Australia</h2>
              <ul>
                <li>Certificate & Diploma Programs</li>
                <li>Doctoral Degree (PhD)</li>
                <li> Master's Degree</li>
                <li> Bachelor's Degree</li>
                <li>Associate Degree</li>

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
                  <p className="note-title">Australia offers two major academic intakes:</p>


                  <div className="main-intack-block">

                    <div className="intake-wrapper">
                      <div className="intake">
                        <img className="calendar-icon" src={fabcalender} alt="fabcalender" />
                        <div className="intake-text">
                          <strong>Primary Intake </strong>

                        </div>
                      </div>


                      <div className="intake">
                        <img className="calendar-icon" src={julcalender} alt="julcalender" />
                        <div className="intake-text">
                          <strong>Secondary Intake</strong>

                        </div>
                      </div>

                    </div>

                    <p className="note">Some institutions may offer additional intakes in <b>November or March</b>, depending on the course.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="eligliblity-detail">
              <div className="">

                <div className="work-text">
                  <h2>Part-Time Work Rights</h2>
                  <p> International students on a valid student visa
                    can work.</p>

                  <div className="work-item">
                    <div className="icon-circle"><img src={timeclock} alt="timeclock" /></div>
                    <div>
                      <strong className="work-title">Up to 48 hours per fortnight</strong><br />
                      <span className="work-subtext">during the academic session</span>
                    </div>
                  </div>

                  <div className="work-item">
                    <div className="icon-circle hourglass"><img src={fulltime} alt="fulltime" /></div>
                    <div>
                      <strong className="work-title">Unlimited hours</strong><br />
                      <span className="work-subtext">during scheduled breaks This allows students to gain work experience and manage living expenses.</span>
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
                      <p>Engineering</p>
                    </div>
                    <div className="field">
                      <img src={computer} alt="computer" />
                      <p>Computer Science & IT</p>
                    </div>
                    <div className="field">
                      <img src={Businessimg} alt="Businessimg" />
                      <p>Business & Management</p>
                    </div>
                    <div className="field">
                      <img src={artimg} alt="artimg" />
                      <p>Art & Humanities</p>
                    </div>
                    <div className="field">
                      <img src={medicine} alt="medicine" />
                      <p>Medicine & Healthcare</p>
                    </div>
                    <div className="field">
                      <img src={socialscience} alt="socialscience" />
                      <p>Social Sciences</p>
                    </div>
                  </div>
                </div>
      
              </div>
            </div>
            <div className="main-language-section canada-language">
                    <div className="truva-container">
                      <div className="language-section">
                        <div className="language-image">
                          <img src={auslanguage} alt="auslanguage" />
                        </div>
                        <div className="language-text">
                          <h2>English Language Requirements</h2>
                          <p className='note-title'>International students must demonstrate English proficiency through
recognized tests. Common requirements include.</p>
                     
            
                          <table>
                            <tr>
                              <td>IELTS</td>
                              <td><strong>6.0 overall (varies by course)</strong></td>
                            </tr>
                            <tr>
                              <td>TOEFL iBT</td>
                              <td><strong>60-80</strong></td>
                            </tr>
                            <tr>
                              <td>PTE </td>
                              <td><strong>50-58</strong></td>
                            </tr>
            
                          </table>
                          <p><b>Note:</b>Other English language tests may also be accepted.</p>
                        </div>
                      </div>
                    </div>
                  </div>

 <div className="academic-intact-main">
        <div className="truva-container">
          <div className="academic-intact">
            <div className="ausvisa-subclass">
              <h1>Australia Student Visa <br />
(Subclass 500) </h1>
              <h4>Streamlined Visa Process (SVP)</h4>
              <p>Australia offers a simplified and faster visa pathway
for international students through its Streamlined 
Visa Process (SVP).</p>
<h4>Benefits of SVP</h4>
<ul className='visa-subclass-detail'>
  <li>Faster and easier application processing</li>
  <li>Reduced financial documentation requirements</li>
  <li>Recent funds and varied sponsors accepted</li>
  <li>Work rights for dependents of Master’s and PhD students</li>
  <li>Acceptance of alternative English tests</li>
  <li>No need for fixed deposits</li>
</ul>


              
            </div>

            <div className="image">
              <img src={acadamic} alt="acadamic" />
            </div>
          </div>
        </div>
      </div>

<div className="visa-requermeant">
  <div className="truva-container">
      <div className="academic-intact-visa">
         <div className="image">
              <img src={visarequermeant} alt="visarequermeant" />
            </div>
            <div className="ausvisa-subclass">
              <h1>Student Visa Requirements
 </h1>
           
              <p>To apply for an Australian student visa, you must</p>

<ul className='visa-subclass-detail'>
  <li>Have a Confirmation of Enrolment (CoE) from a recognized Australian institution</li>
  <li>Satisfy the Genuine Temporary Entrant (GTE) criteria</li>
  <li>Provide evidence of sufficient financial capacity</li>
  <li>Hold a valid passport</li>
  <li>Meet English proficiency and health requirements</li>
  <li>Hold Overseas Student Health Cover (OSHC)</li>
</ul>


              
            </div>

           
          </div>
          </div>
  </div>


<div className="estimate-cost">
  <div className="truva-container">
    <div className="cose-block-grid">
       <div className="estementcost">
        <div className="truva-container">
          <div className="eastement-inner eastement-detail">
            <h2>Academic Eligibility</h2>
            <p>To apply, students must meet the academic requirements set by their chosen course and institution. In general, a minimum of 50% marks in previous studies is required (criteria may vary based on the program level).</p>
          </div>
        </div>
      </div>
       <div className="estementcost">
        <div className="truva-container">
          <div className="eastement-inner eastement-detail">
            <h2>Estimated Monthly Living Costs</h2>
            <p>The average monthly cost of living in Australia ranges from AUD 1,200 to AUD 2,500, depending on the city and lifestyle. This includes accommodation, food, transport, and other personal expenses.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
     
     

      


      <Footer />
    </>
  );
};

export default Australia;