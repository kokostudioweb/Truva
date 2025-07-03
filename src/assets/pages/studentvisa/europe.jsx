import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import europbanner from '../../images/europbanner.png';
import europhero from '../../images/europhero.png';
import europmap from '../../images/europmap.png';
import europlanguage from '../../images/europlanguage.png';
import europrequermeant from '../../images/europrequermeant.png';
import workcountryeurop from '../../images/work-country-europ.png';
import europrecideancy from '../../images/europrecideancy.png';
import janfabicon from '../../images/jan-fab.svg';
import sepaugicon from '../../images/sep-aug.svg';
import fulltime from '../../images/fulltime.svg';
import timeclock from '../../images/timeclock.svg';
import engtechnology from '../../images/engtechnology.svg';
import economic from '../../images/economic.svg';
import aiman from '../../images/aiman.svg';
import architecture from '../../images/architecture.svg';
import studies from '../../images/studies.svg';
import medicine from '../../images/medicine.svg';
import hospital from '../../images/hospital.svg';
import internationalrelations from '../../images/internationalrelations.svg';
import artimg from '../../images/artimg.svg';
import europstudentvisa from '../../images/europstudentvisa.svg';
import stayvisa from '../../images/stayvisa.svg';


const countries = [
  { code: "de", name: "Germany" },
  { code: "fr", name: "France" },
  { code: "it", name: "Italy" },
  { code: "nl", name: "Netherlands" },
  { code: "es", name: "Spain" },
  { code: "se", name: "Sweden" },
  { code: "fi", name: "Finland" },
  { code: "pt", name: "Portugal" },
  { code: "lt", name: "Lithuania" },
  { code: "lv", name: "Latvia" },
  { code: "hu", name: "Hungary" },
  { code: "ee", name: "Estonia" },
  { code: "pl", name: "Poland" },
  { code: "ie", name: "Ireland" },
  { code: "ro", name: "Romania" },
  { code: "hr", name: "Croatia" },
  { code: "gr", name: "Greece" },
  { code: "mt", name: "Malta" },
  { code: "cy", name: "Cyprus" },
  { code: "cz", name: "Czech Republic" },
  { code: "ch", name: "Switzerland" },
  { code: "be", name: "Belgium" },
  { code: "at", name: "Austria" },
];

const Europe = () => {
  const handleImageError = (e) => {
    e.target.src = "/fallback.png"; // Optional fallback
  };
  return (
    <>


      <div className="main-banner-common"
        style={{
          backgroundImage: `url(${europbanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '720px',
          width: '100%',
          objectFit: 'contain',
        }}
      >
        <div className="truva-container">
          <div className="banner-common-title">
            <h2>Europe     </h2>

          </div>
        </div>
      </div>
      <div className="main-usa-data">
        <div className="truva-container">
          <div className="usainner-block">
            <div className="usainner-images">
              <img src={europhero} alt="europhero" />
            </div>
            <div className="usainner-detail">
              <h2 className=''>Europe     </h2>
              <p>Europe offers a wide array of academic options in countries like Germany, France, Italy, and the Netherlands. With lower tuition fees, scholarships, and courses in English, it’s a cost-effective destination for quality education. Truva assists you with selecting the right country, applying for residence permits, and preparing required documentation. Whether you're aiming for business, engineering, or art studies, we simplify the complex visa processes and help you adapt to the European academic lifestyle.
              </p>
              <h3>Why Choose Europe for Higher Education?</h3>
              <p>Europe is a global education powerhouse, home to some of the world's oldest and most prestigious universities. With a strong focus on academic excellence, cultural diversity, and global exposure, Europe attracts thousands of international students each year. Whether you seek quality education, affordable living, or multicultural experiences — Europe offers it all.
              </p>

            </div>


          </div>
          <div className="data-benifit">
            <h3>Key Benefits of Studying in Europe </h3>

            <div className="data-benefit-usa">
              <div>
                <h4>1. Wide Range of Courses and Institutions  </h4>
                <p>Europe offers thousands of programs across <b>30+ countries</b> in <b>over 1,500 public and private
                  institutions</b>, covering everything from technology and medicine to arts, design, and social
                  sciences.
                </p>
              </div>
              <div>
                <h4>2. Globally Recognized Qualifications</h4>
                <p>Degrees from European universities are highly respected globally and often align with the
                  <b>Bologna Process</b>, ensuring consistency and quality across the continent.

                </p>
              </div>
              <div>
                <h4>3. Affordable or No Tuition Fees  </h4>
                <p>Several countries (like Germany, Norway, and France) offer <b>low-cost or tuition-free
                  education</b> for international students — especially at public universities.
                </p>
              </div>
              <div>
                <h4>4. Multicultural Environment  </h4>
                <p>Europe is a melting pot of cultures, languages, and traditions. Studying here offers an
                  unmatched opportunity to grow personally and professionally while meeting peers from across
                  the globe. </p>
              </div>
              <div>
                <h4>5. English-Taught Programs   </h4>
                <p>Thousands of degree programs across Europe are taught entirely in <b>English</b>, making
                  education accessible to non-native speakers.  </p>
              </div>
              <div>
                <h4>6. Post-Study Work Options</h4>
                <p>Many European countries allow international graduates to stay and work after completing their
                  studies — often for <b>12 to 24 months</b>, depending on the destination. </p>
              </div>
              <div>
                <h4>7. Excellent Travel Opportunities</h4>
                <p>With the <b>Schengen Visa</b>, you can travel across 27 European countries freely — opening doors
                  to cultural discovery, internships, and networking.</p>
              </div>
              <div>
                <h4>8. Pathway to PR and Settlement </h4>
                <p>Europe offers favorable pathways to long-term residency for international graduates, especially
                  in countries like Germany, France, Netherlands, and Ireland. </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="programs-offered">
        <div className="truva-container">
          <div className="programs-offered-common">
            <div className="image-box">
              <img src={europmap} alt="Europ Map" />
            </div>
            <div className="content-box">
              <h2>Degrees Offered</h2>
              <ul>
                <li>Diplomas & Advanced Diplomas</li>
                <li>PhD/Doctorate Programs</li>
                <li> Master's Degree</li>
                <li>Bachelor’s Degree</li>
                <li>Pathway/Foundation Courses</li>

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
                  <h1>Popular Intakes</h1>
                  <p className="note-title">Most European universities offer two major intakes</p>


                  <div className="main-intack-block">

                    <div className="intake-wrapper">
                      <div className="intake">
                        <img className="calendar-icon" src={sepaugicon} alt="sepaugicon" />
                        <div className="intake-text">
                          <strong>Primary Intake </strong>
                          Primary Intake
                        </div>
                      </div>


                      <div className="intake">
                        <img className="calendar-icon" src={janfabicon} alt="janfabicon" />
                        <div className="intake-text">
                          <strong>Winter</strong>
                          Secondary intake
                        </div>
                      </div>

                    </div>

                    <p className="note">Some universities may also offer limited programs
                      in Summer (May/June).</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="eligliblity-detail">
              <div className="">

                <div className="work-text">
                  <h2>Part-Time Work
                    Opportunities</h2>
                  <p> International students in most European
                    countries can work up to</p>

                  <div className="work-item">
                    <div className="icon-circle"><img src={timeclock} alt="timeclock" /></div>
                    <div>
                      <strong className="work-title">Up to 20 hours/week</strong><br />
                      <span className="work-subtext">during academic sessions</span>
                    </div>
                  </div>

                  <div className="work-item">
                    <div className="icon-circle hourglass"><img src={fulltime} alt="fulltime" /></div>
                    <div>
                      <strong className="work-title">Full Time</strong><br />
                      <span className="work-subtext">This offers students a chance to
                        earn while studying and gain
                        professional experience.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="popular-fuildmain europ-detail">
        <div className="truva-container">
          <div className="fields-section europ-detail-section">
            <h2 className="title">Popular Programs in Europe</h2>
            <div className="grid">
              <div className="field">
                <img src={engtechnology} alt="engtechnology" />
                <p>Engineering & Technology</p>
              </div>
              <div className="field">
                <img src={economic} alt="economic" />
                <p>Business & Economics</p>
              </div>
              <div className="field">
                <img src={aiman} alt="aiman" />
                <p>Data Science & Artificial Intelligence</p>
              </div>
              <div className="field">
                <img src={architecture} alt="architecture" />
                <p>Architecture & Design</p>
              </div>
              <div className="field">
                <img src={studies} alt="studies" />
                <p>Environmental Studies</p>
              </div>
              <div className="field">
                <img src={medicine} alt="medicine" />
                <p>Medicine & Healthcare</p>
              </div>
              <div className="field">
                <img src={hospital} alt="hospital" />
                <p>Hospitality & Tourism</p>
              </div>
              <div className="field">
                <img src={internationalrelations} alt="internationalrelations" />
                <p>International Relations</p>
              </div>
              <div className="field">
                <img src={artimg} alt="artimg" />
                <p>Art & Humanities</p>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className="main-language-section canada-language">
        <div className="truva-container">
          <div className="language-section">
            <div className="language-image">
              <img src={europlanguage} alt="europlanguage" />
            </div>
            <div className="language-text">
              <h2>English Language Requirements</h2>
              <p className='note-title'>International students must demonstrate English proficiency through recognized tests. Common requirements include.</p>


              <table>
                <tr>
                  <td>IELTS</td>
                  <td><strong>6.0+ overall (varies by course)</strong></td>
                </tr>
                <tr>
                  <td>TOEFL iBT</td>
                  <td><strong>70-90+</strong></td>
                </tr>
                <tr>
                  <td>PTE </td>
                  <td><strong>50-60+</strong></td>
                </tr>

              </table>
              <p><b>Note:</b> Some universities may waive English tests if previous education was in English.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="study-country-main">
        <div className="truva-container">
          <div className="main-europ-country  ">
            <h1 className="study-title">Popular Study Destinations in Europe</h1>
            <div className="study-grid">
              {countries.map((country) => (
                <div key={country.code} className="study-item">
                  <img
                    src={`https://flagcdn.com/24x18/${country.code}.png`}
                    alt={country.name}
                    onError={handleImageError}
                    className="study-flag"
                  />
                  <span>{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="visa-requermeant">
        <div className="truva-container">
            <div className="academic-intact-visa">
               <div className="image">
                    <img src={europrequermeant} alt="europrequermeant" />
                  </div>
                  <div className="ausvisa-subclass">
                    <h1>Visa Requirements
       </h1>
                 
                    <p>To apply for a European student visa, you generally need to</p>
      
      <ul className='visa-subclass-detail'>
        <li>Obtain a Letter of Acceptance from a recognized European institution</li>
        <li>Provide proof of sufficient funds for tuition and living expenses</li>
        <li>Purchase valid health insurance for your stay</li>
        <li>Show proof of accommodation</li>
        <li>Provide academic and language qualification documents</li>
        <li>Hold a valid passport</li>
        <li>Submit a clear visa application with biometric data</li>
      </ul>
      
      
                    
                  </div>
      
                 
                </div>
                </div>
        </div>

        <div className="post-opportunity">
          <div className="truva-container">
             <div class="opportunity-section">
    <h2>Post-Study Work Opportunities</h2>
    <p class="subtitle">Most countries offer graduate visas, including</p>

    <div class="card-container">
 <img src={workcountryeurop} alt="workcountryeurop" />
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


                  <div className="text-section">
                  <ul className="criteria-list">
                    <li>
                      <span className="checkmark">✔</span>
                     Minimum 50% or above in previous education
                    </li>
                    <li>
                      <span className="checkmark">✔</span>
                      Recognized high school or undergraduate qualification
                    </li>
                    <li>
                      <span className="checkmark">✔</span>
                      For Master’s: a recognized Bachelor’s degree with relevant 
academic background
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
            <div className="eligliblity-detail">
              <div className="">

                <div className="work-text">
                  <h2>Europe Student Visa </h2>
                  <p> Types of Student Visas.</p>

                  <div className="work-item">
                    <div className="icon-circle"><img src={europstudentvisa} alt="europstudentvisa" /></div>
                    <div>
                      <strong className="work-title">Schengen Student Visa</strong><br />
                      <span className="work-subtext">Short-term study (less than 90 days)</span>
                    </div>
                  </div>

                  <div className="work-item">
                    <div className="icon-circle hourglass"><img src={stayvisa} alt="stayvisa" /></div>
                    <div>
                      <strong className="work-title">National Long-Stay Visa (D-Type)</strong><br />
                      <span className="work-subtext">For courses longer than 90 days  Each country
issues its own long-term visa with specific
conditions.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 <div className="visa-requermeant">
        <div className="truva-container">
            <div className="academic-intact-visa">
               <div className="image">
                    <img src={europrecideancy} alt="europrecideancy" />
                  </div>
                  <div className="ausvisa-subclass">
                    <h1>Pathways to Residency
       </h1>
                 
                    <p>After completing studies and gaining employment, many European
countries allow international students to apply for</p>
      
      <ul className='visa-subclass-detail'>
        <li>Work Permits </li>
        <li>Temporary or Permanent Residency</li>
        <li>Blue Card (EU Work Visa for skilled workers)</li>
      
      </ul>
      
      
                    
                  </div>
      
                 
                </div>
                </div>
        </div>
<div className="estementcost">
        <div className="truva-container">
          <div className="eastement-inner">
            <h2>Estimated Monthly Living Costs</h2>
            <p>Costs vary based on country and city, but typical ranges are €700 – €1,500 per month Includes accommodation, food, transportation, and
 miscellaneous expenses.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Europe;