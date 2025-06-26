import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import studentvisabaner from '../../images/studentvisabaner.png';





// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../footer';
// import studentvisabaner from '../../images/studentvisabaner.png';
import canadaimg from '../../images/canadaimg.png';
import acadamic from '../../images/acadamic.png';
import eligliblityimg from '../../images/eligliblityimg.png';
import programs from '../../images/programs.png';
import language from '../../images/language.png';
import workimage from '../../images/workimage.png';
import poststudy from '../../images/poststudy.png';
import eligliblityimage from '../../images/eligliblityimage.png';
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



const Canada = () => {
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
            <h2>Canada Student Visa     </h2>

          </div>
        </div>
      </div>

      <div className="main-usa-data">
        <div className="truva-container">
          <div className="usainner-block">
            <div className="usainner-images">
              <img src={canadaimg} alt="canadaimg" />
            </div>
            <div className="usainner-detail">
              <h2>Canada Student Visa  </h2>
              <p>Canada is globally recognized for its student-friendly immigration policies and affordable
                tuition. The Student Direct Stream (SDS) enables faster visa processing, especially for
                Indian students. Truva Overseas offers end-to-end support for securing admission,
                preparing your Statement of Purpose (SOP), and meeting GIC and IELTS requirements.
                Studying in Canada also opens doors to post-study work permits and pathways to
                permanent residency. With safety, multiculturalism, and high employability, Canada is a
                top choice for international education.
              </p>
              <h3>Why Choose Canada for Higher Education?</h3>
              <p>Canada has emerged as one of the most preferred study destinations for international
                students, offering an ideal blend of academic excellence, cultural diversity, safety, and
                pathways to long-term settlement. Whether you’re pursuing undergraduate or
                postgraduate education, Canada offers you a solid foundation for global success.
              </p>

            </div>


          </div>
          <div className="data-benifit">
            <h3>Key Benefits of Studying in Canada </h3>

            <div className="data-benefit-usa">
              <div>
                <h4>1. World-Class Education</h4>
                <p>Canada’s education system is globally recognized for its high standards, rigorous
                  academic structure, and emphasis on research and innovation. Institutions across the
                  country offer modern learning environments supported by experienced faculty and
                  real-world relevance.
                </p>
              </div>
              <div>
                <h4>2. Multicultural & Inclusive Society </h4>
                <p>With a diverse population and open-minded culture, international students find it easy
                  to adapt and thrive in Canada. You’ll be welcomed into a vibrant society that values
                  respect, inclusion, and global perspectives. </p>
              </div>
              <div>
                <h4>3. Work While You Study </h4>
                <p>International students are allowed to work up to 20 hours per week during semesters
                  and full-time during scheduled breaks, helping you gain practical experience and
                  financial independence.

                </p>
              </div>
              <div>
                <h4>4. Focus on Innovation & Research</h4>
                <p>Canada is home to some of the world’s most advanced research institutions. Students
                  have access to cutting-edge labs, real-world projects, and innovation-driven learning,
                  especially in science, tech, and health sectors.</p>
              </div>
              <div>
                <h4>5. Safe, Peaceful Environment </h4>
                <p>Canada is consistently ranked among the safest countries globally, with low crime rates
                  and student-friendly cities. Your personal and academic journey is supported by a
                  secure and welcoming environment. </p>
              </div>
              <div>
                <h4>6. Career-Ready Education </h4>
                <p>A Canadian qualification is highly valued across international job markets. Combined
                  with work experience and career services, graduates are well-equipped for global
                  opportunities. </p>
              </div>
              <div>
                <h4>7. Pathway to Permanent Residency  </h4>
                <p>Canada offers post-study immigration options, allowing students to apply for permanent
                  residency through various immigration streams upon meeting eligibility criteria.  </p>
              </div>
              <div>
                <h4>8. Spouse and Dependent Benefits  </h4>
                <p>Eligible students can bring their spouse or dependents along. Spouses may also apply
                  for an open work permit, allowing them to work full-time in Canada. </p>
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

                <div className="intake-wrapper intect-canada">
                  <div className="intake">
                    <img className="calendar-icon" src={sepcalender} alt="sepcalender" />
                    <div className="intake-text">
                      <strong>Fall </strong>
                      Primary intake across most programs
                    </div>
                  </div>

                  
                  <div className="intake">
                    <img className="calendar-icon" src={jancalender} alt="jancalender" />
                    <div className="intake-text">
                      <strong>Winter</strong>
                      Popular secondary intake
                    </div>
                  </div>
                  <div className="intake">
                    <img className="calendar-icon" src={jancalender} alt="jancalender" />
                    <div className="intake-text">
                      <strong>Spring/Summer</strong>
                      Available for select courses and institutions
                    </div>
                  </div>
                </div>

                
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
              <h2>Popular Programs</h2>
              <ul className="criteria-list">
                <li>
                  <span className="checkmark">✔</span>
              Environmental Science
                </li>
                <li>
                  <span className="checkmark">✔</span>
                 Business Administration
                </li>
                <li>
                  <span className="checkmark">✔</span>
                  Information Technology
                </li>
                <li>
                  <span className="checkmark">✔</span>
                 Health Studies
                </li>
                <li>
                  <span className="checkmark">✔</span>
                  Physics & Chemistry
                </li>
                <li>
                  <span className="checkmark">✔</span>
                  Engineering and Applied Sciences
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
                <div className="program-item"> Undergraduate Diplomas & Advanced Diplomas</div>
                <div className="program-item"> Bachelor’s Degrees</div>
                <div className="program-item"> Master’s Degrees</div>
                <div className="program-item"> Postgraduate Diplomas & Graduate Certificates</div>
               
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
                  <td><strong>6.0 overall (varies by program)</strong></td>
                </tr>
                <tr>
                  <td>TOEFL iBT</td>
                  <td><strong>80+</strong></td>
                </tr>
                <tr>
                  <td>PTE </td>
                  <td><strong>60+</strong></td>
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
                  <strong className="work-title">Up to 20 hours/week</strong><br />
                  <span className="work-subtext">During academic sessions</span>
                </div>
              </div>

              <div className="work-item">
                <div className="icon-circle hourglass"><img src={fulltime} alt="fulltime" /></div>
                <div>
                  <strong className="work-title">Full Time</strong><br />
                  <span className="work-subtext">giving you a chance to gain professional
experience and manage living expenses.</span>
                </div>
              </div>
            </div>

            <div className="work-image">
              <img src={workimage} alt="workimage" />
            </div>
          </div>
        </div>
      </div>

      

      <div className="post-study">
        <div className="truva-container">
          <div className="post-study-inner">
            <div className="post-study-image">
              <img src={poststudy} alt="poststudy" />
            </div>
            <div className="post-study-text">
              <h2>Visa & Immigration
Notes</h2>
              <p>
                Canada’s <b>Student Direct Stream (SDS)</b> facilitates faster
visa processing for eligible students. Under this program,
students are typically required to purchase a <b>Guaranteed
Investment Certificate (GIC)</b> and pay the first year of tuition fees in advance.
              </p>
              <p>Graduates can apply for a <b>Post-Graduation Work Permit (PGWP)</b>, which allows them to work in Canada for up to three years after completing their studies.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="eligliblity-section">
        <div className="truva-container">
          <div class="eligliblity-data">
    <div class="text-section">
      <h2>Eligibility Requirements</h2>
      <ul>
        <li>Minimum academic score of 50% in previous studies <br /><span class="note">(varies by program and institution)</span></li>
        <li>Valid passport and sufficient financial proof</li>
        <li>Acceptance letter from a recognized institution</li>
      </ul>
    </div>
    <div class="image-section">
      <img src={eligliblityimage} alt="eligliblityimage" />
    </div>
  </div>
        </div>
      </div>
      <div className="estementcost">
        <div className="truva-container">
          <div className="eastement-inner">
            <h2>Estimated Monthly Living Costs</h2>
            <p>Living costs range from CAD 1,000 to CAD 3,000 per month depending on your location, lifestyle, and accommodation. This covers food, rent, transport, insurance, and miscellaneous expenses.</p>
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

export default Canada;