import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import studentvisabaner from '../../images/studentvisabaner.png';





// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../footer';
// import studentvisabaner from '../../images/studentvisabaner.png';
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
              <img src={usavisa} alt="usavisa" />
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
              <img src={language} alt="language" />
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

            <div className="work-image">
              <img src={workimage} alt="workimage" />
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
                <p>Computer Science<br />& <br /> IT</p>
              </div>
              <div class="field-card">
                <img src={human} alt="human" />
                <p>Arts<br />& <br /> Humanities</p>
              </div>
              <div class="field-card">
                <img src={helthcare} alt="helthcare" />
                <p>Healthcare<br />& <br /> Medicine</p>
              </div>
              <div class="field-card">
                <img src={social} alt="social" />
                <p>Social Sciences</p>
              </div>
              <div class="field-card">
                <img src={business} alt="business" />
                <p>Business<br />& <br /> Management</p>
              </div>
              <div class="field-card">
                <img src={technology} alt="technology" />
                <p>Engineering<br />& <br /> Technology</p>
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



      <Footer />
    </>
  );
};

export default Canada;