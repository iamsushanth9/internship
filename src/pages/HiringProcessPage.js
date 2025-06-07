import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HiringProcessPage() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

  const sections = [
    { id: "resume-search", title: "Resume Search - Resources" },
    { id: "screening", title: "Screening Process" },
    { id: "final-interview", title: "Final Interview / Selection Process" },
    { id: "post-interview", title: "Post Interview Process" },
    { id: "mobilization", title: "Mobilization" },
    { id: "ticketing", title: "Ticketing" },
    { id: "orientation", title: "Orientation" },
    { id: "airport", title: "Airport Activities" },
    { id: "service-fee", title: "Service Fee" }
  ];

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const section = sectionRefs.current[sectionId];
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
    }
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-100px 0px -200px 0px", threshold: 0.1 }
    );
    sections.forEach(section => {
      if (sectionRefs.current[section.id]) {
        observer.observe(sectionRefs.current[section.id]);
      }
    });
    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id) => {
    const section = sectionRefs.current[id];
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const sectionStyle = "bg-white rounded-xl shadow-[0_4px_6px_rgba(34,197,94,0.3)] p-12 transition-all duration-500 hover:shadow-[0_6px_8px_rgba(34,197,94,0.5)] hover:scale-[1.02]";
  const paragraphStyle = "text-gray-700 leading-relaxed";
  const columnStyle = "w-full md:w-1/2 px-4";
  const titleContainerStyle = "mb-4";
  const sectionTitleContainerStyle = "flex items-center mb-6";
  const sectionTitleImageStyle = "w-12 h-12 rounded-full mr-4";

  const sectionContent = {
    "resume-search": {
      benefits: [
        "Broad talent access via job portals, databank, and extensive office network.",
        "Diverse candidate sourcing through ads, official channels, associations, and training centers.",
        "Specialized recruitment through headhunting and agency partnerships."
      ],
      approach: "We employ a comprehensive strategy utilizing our online platforms (www.huntsjob.com, www.jobs4hunt.ph), databank, widespread branch offices, advertising, and collaborations with government, welfare, and training institutions, including direct headhunting, to connect employers with suitable candidates."
    },
    "screening": {
      benefits: [
        "Precise candidate matching to client job specifications, industry, qualifications, experience, and nationality.",
        "Thorough, multi-stage screening and in-depth reviews by specialized internal departments.",
        "Comprehensive verification including referrals, certificates, police clearance, and travel documents.",
        "Skill validation through trade tests, with options for internationally recognized third-party assessments.",
        "Detailed candidate evaluation reports provided to clients, covering skills, aptitude, medical status, and language."
      ],
      approach: "We begin by meticulously sourcing candidates from our data, precisely aligning them with client job specifications. Our widespread offices conduct initial screening, after which specialized in-house departments (such as Engineering, Civil Construction, Marine, Oil & Gas, Hospitality, Health Care, and Management) perform in-depth reviews and communicate with prospects. Concurrently, our Operations Department diligently handles referral checks, certificate verification, police clearances, and travel documentation. When applicable, skills are validated through trade tests at MENA training centers, or via internationally recognized third-party agencies. Finally, pre-screened candidates undergo personal interviews to evaluate their skills, aptitude, medical status, and language proficiency, culminating in a comprehensive evaluation report for our clients."
    },
    "final-interview": { benefits: [], approach: "" },
    "post-interview": {
      benefits: [
        "Efficient and streamlined process",
        "Quality candidates that match your requirements",
        "Reduced time-to-hire"
      ],
      approach: "We take a comprehensive approach to ensure that each step of the process is handled with utmost professionalism and attention to detail, resulting in the best outcomes for both employers and candidates."
    },
    "mobilization": { benefits: [], approach: "" },
    "ticketing": { benefits: [], approach: "" },
    "orientation": { benefits: [], approach: "" },
    "airport": { benefits: [], approach: "" },
    "service-fee": { benefits: [], approach: "" } // Will use custom content below
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 bg-white" />
      <div className="relative z-10">
        <Navbar />
        <div className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <nav className="text-sm mb-4">
              <ol className="list-none p-0 flex justify-center">
                <li>
                  <a href="/" className="text-gray-600 hover:text-cyan-700">Home</a>
                  <span className="mx-2 text-gray-400">/</span>
                </li>
                <li className="text-gray-900 font-semibold">Hiring Process</li>
              </ol>
            </nav>
            <h1 style={{ color: "#007958", fontSize: "clamp(2.5rem,6.5vw,4rem)" }} className="font-bold">
              Our Hiring Process
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Discover our structured and efficient hiring process designed to meet your needs.
            </p>
          </div>
        </div>
        <div className="bg-gray-100/90 py-2">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="text-sm">
              <ol className="list-none p-0 flex">
                <li>
                  <a href="/" className="text-gray-600 hover:text-cyan-700">Home</a>
                  <span className="mx-2 text-gray-400">/</span>
                </li>
                <li className="text-cyan-700 font-semibold">Hiring Process</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-transparent min-h-[calc(100vh-140px)]">
          <aside className="w-full md:w-64 bg-[#1e2736] flex-shrink-0">
            <div className="md:sticky md:top-[100px] md:h-[calc(100vh-140px)] overflow-y-auto py-6">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-8 py-3 text-sm font-medium transition-all duration-300 ease-in-out ${
                    activeSection === section.id
                      ? "bg-gray-200 text-[#1e2736] shadow-md border-l-4 border-cyan-600"
                      : "text-gray-300 hover:bg-[#2a3447] hover:text-white"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </aside>
          <main className="flex-1 p-6 md:p-12 overflow-y-auto">
            {sections.map((section, idx) => (
              <div key={section.id} id={section.id} ref={el => sectionRefs.current[section.id] = el} className="mb-12">
                {/* Remove duplicate headings for Resume Search - Resources, Screening Process, Service Fee */}
                {(
                  (section.id === "resume-search" && idx !== 0) ||
                  (section.id === "screening" && idx !== 1) ||
                  (section.id === "service-fee" && idx !== sections.length - 1)
                ) ? null : (
                  <>
                    {/* Add headings with images for the main process sections */}
                    {section.id === "final-interview" && (
                      <div className={sectionTitleContainerStyle}>
                        <img
                          src={require("../assets/hp3.png")}
                          alt="Final Interview / Selection Process"
                          className="w-12 h-12 rounded-full object-cover mr-4 bg-gray-200"
                        />
                        <h2 className="text-2xl font-bold text-gray-900">Final Interview / Selection Process</h2>
                      </div>
                    )}
                    {section.id === "post-interview" && (
                      <div className={sectionTitleContainerStyle}>
                        <img
                          src={require("../assets/hp4.png")}
                          alt="Post Interview Process"
                          className="w-12 h-12 rounded-full object-cover mr-4 bg-gray-200"
                        />
                        <h2 className="text-2xl font-bold text-gray-900">Post Interview Process</h2>
                      </div>
                    )}
                    {section.id === "mobilization" && (
                      <div className={sectionTitleContainerStyle}>
                        <img
                          src={require("../assets/hp5.png")}
                          alt="Mobilization"
                          className="w-12 h-12 rounded-full object-cover mr-4 bg-gray-200"
                        />
                        <h2 className="text-2xl font-bold text-gray-900">Mobilization</h2>
                      </div>
                    )}
                    {section.id === "ticketing" && (
                      <div className={sectionTitleContainerStyle}>
                        <img
                          src={require("../assets/hp6.png")}
                          alt="Ticketing"
                          className="w-12 h-12 rounded-full object-cover mr-4 bg-gray-200"
                        />
                        <h2 className="text-2xl font-bold text-gray-900">Ticketing</h2>
                      </div>
                    )}
                    {section.id === "orientation" && (
                      <div className={sectionTitleContainerStyle}>
                        <img
                          src={require("../assets/hp7.png")}
                          alt="Orientation"
                          className="w-12 h-12 rounded-full object-cover mr-4 bg-gray-200"
                        />
                        <h2 className="text-2xl font-bold text-gray-900">Orientation</h2>
                      </div>
                    )}
                    {section.id === "airport" && (
                      <div className={sectionTitleContainerStyle}>
                        <img
                          src={require("../assets/hp8.png")}
                          alt="Airport Activities"
                          className="w-12 h-12 rounded-full object-cover mr-4 bg-gray-200"
                        />
                        <h2 className="text-2xl font-bold text-gray-900">Airport Activities</h2>
                      </div>
                    )}
                    {section.id === "final-interview" ? (
                      <>
                        <div className="bg-white rounded-xl shadow p-8 mb-8">
                          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            MENA ORGANIZES INTERVIEWS DEPENDING ON THE VOLUME OF REQUIREMENTS USING THE FOLLOWING METHODOLOGY
                          </h2>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-4 border border-gray-200">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#007958] text-white font-bold mb-2">1</div>
                              <div className="text-center font-semibold text-gray-800 text-sm">FACE TO FACE INTERVIEW BETWEEN CLIENT AND CANDIDATES</div>
                            </div>
                            <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-4 border border-gray-200">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#007958] text-white font-bold mb-2">2</div>
                              <div className="text-center font-semibold text-gray-800 text-sm">VIDEO CONFERENCE FACILITY</div>
                            </div>
                            <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-4 border border-gray-200">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#007958] text-white font-bold mb-2">3</div>
                              <div className="text-center font-semibold text-gray-800 text-sm">SKYPE</div>
                            </div>
                            <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-4 border border-gray-200">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#007958] text-white font-bold mb-2">4</div>
                              <div className="text-center font-semibold text-gray-800 text-sm">TELEPHONIC / IOM</div>
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg shadow p-4 border-l-4 border-[#007958] mb-4">
                            <span className="text-gray-700">
                              In the event of Interview through video conferencing, we <b>assemble the approved candidates</b>, batch-wise, in our office and keep our client advised on the timing for each candidate.
                            </span>
                          </div>
                          <div className="bg-gray-50 rounded-lg shadow p-4 border-l-4 border-[#007958] mb-4">
                            <span className="text-gray-700">
                              <b>MENA makes all interview arrangements</b> - conference hall/interview hall with individual cabin for the visiting delegates, sufficient seating arrangement for the short-listed, stationary, secretarial assistance and communication facilities. A team of experienced staff co-ordinates, distributes test papers for written test as and when applicable, provides entry passes and regulates the candidates' test. MENA staff will have close coordination with the visiting delegates at all times and will help compile final selection status reports.
                            </span>
                          </div>
                          <div className="bg-gray-50 rounded-lg shadow p-4 border-l-4 border-[#007958]">
                            <span className="text-gray-700">
                              In addition to the facilities for personal Interview and trade test, <b>MENA'S VIDEO CONFERENCING facilities</b> are also available for a fee which will be determined in accordance with the number of prospective candidates to be interviewed, place, city and a host of other parameters involved (an estimate could be made available against specific request with details). MENA can also render the services of conducting interviews and selecting candidates for and on behalf of clients. MENA's technical evaluation team from the appropriate department shall scrutinize resumes critically, conduct trade tests / personal interviews, before candidates are deployed for work with the client.
                            </span>
                          </div>
                        </div>
                      </>
                    ) : section.id === "post-interview" ? (
                      <>
                        <div className="flex flex-col gap-4 mb-8">
                          <div className="flex items-center bg-gray-50 rounded-lg shadow p-4 border-l-4 border-[#007958]">
                            <span className="inline-block w-8 h-8 rounded-full bg-[#007958] text-white font-bold flex items-center justify-center mr-4">1</span>
                            <span className="font-semibold text-gray-800">OBTAINING FINAL CONFIRMATION FROM THE CLIENT AND THE CANDIDATES</span>
                          </div>
                          <div className="flex items-center bg-gray-50 rounded-lg shadow p-4 border-l-4 border-[#007958]">
                            <span className="inline-block w-8 h-8 rounded-full bg-[#007958] text-white font-bold flex items-center justify-center mr-4">2</span>
                            <span className="font-semibold text-gray-800">PRE-MEDICAL CHECK UP</span>
                          </div>
                          <div className="flex items-center bg-gray-50 rounded-lg shadow p-4 border-l-4 border-[#007958]">
                            <span className="inline-block w-8 h-8 rounded-full bg-[#007958] text-white font-bold flex items-center justify-center mr-4">3</span>
                            <span className="font-semibold text-gray-800">BACKGROUND CHECK / REFERENCE CHECK</span>
                          </div>
                        </div>
                      </>
                    ) : section.id === "mobilization" ? (
                      <>
                        <div className="bg-gray-50 rounded-lg shadow p-6 border-l-4 border-[#007958] mb-8">
                          <span className="block text-gray-800 text-lg font-semibold mb-2">
                            Clients forward visa copy or original visa of the selected candidates to <span className="text-[#007958] font-bold">MENA</span>.
                          </span>
                          <span className="block text-gray-700 mb-2">
                            On receipt of such documents, <span className="font-bold text-[#007958]">MENA</span> invites the candidates traveling to the host country, to hand over the documents, check for correctness of documents, immigration clearance, certificates' endorsement and other paper works to be in order.
                          </span>
                          <span className="block text-gray-700">
                            <span className="font-bold text-[#007958]">MENA</span> carries its own identification tags and such tags are distributed to each candidate with employer's contact details for easy identification at the arrival airport.
                          </span>
                        </div>
                      </>
                    ) : section.id === "ticketing" ? (
                      <>
                        <div className="bg-gray-50 rounded-lg shadow p-6 border-l-4 border-[#007958] mb-8">
                          <span className="block text-gray-800 text-lg font-semibold mb-2">
                            Depending upon the mutual understanding between the foreign principal & Recruitment Agency the arrangement for air ticket is made.
                          </span>
                        </div>
                      </>
                    ) : section.id === "orientation" ? (
                      <>
                        <div className="bg-gray-50 rounded-lg shadow p-6 border-l-4 border-[#007958] mb-8">
                          <span className="block text-gray-800 text-lg font-semibold mb-2">
                            Orientation is important because it lays a foundation for the new employee's entire career with the department. Encourages employee confidence and helps the new employee adapt faster to the job; contributes to a more effective, productive workforce; improves employee retention; and more.
                          </span>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-[#007958]">
                          <div className="text-gray-900 font-semibold mb-2">Some of the Questions Covered during Orientation:</div>
                          <ul className="list-disc ml-8 text-gray-700 space-y-1">
                            <li>Contract and Benefits</li>
                            <li>Salary and Position</li>
                            <li>About Company</li>
                            <li>How long are the employment contracts?</li>
                            <li>What happens if I don't like living in Country and don't feel I can complete my contract?</li>
                            <li>Can I bring my family?</li>
                            <li>Where will I live?</li>
                            <li>Do I have to share my apartment/house (In case very Sr. Professional)</li>
                            <li>How much vacation am I entitled to?</li>
                            <li>When will I be able to take a vacation, and for how long can I go away?</li>
                            <li>Can I leave the Kingdom on vacation whenever I want?</li>
                            <li>What kind of healthcare coverage am I entitled to?</li>
                            <li>I take prescription medication. Can I get it there, or should I bring it with me?</li>
                            <li>Who pays for my flight?</li>
                            <li>If I book my own flight, will the hospital pay me back for it?</li>
                            <li>What does "tax-free income" mean?</li>
                            <li>What is the currency in Saudi Arabia?</li>
                            <li>How am I paid?</li>
                            <li>How easy is it to open a bank account?</li>
                          </ul>
                        </div>
                      </>
                    ) : section.id === "airport" ? (
                      <>
                        <div className="bg-gray-50 rounded-lg shadow p-6 border-l-4 border-[#007958]">
                          <ul className="list-disc ml-8 text-gray-700 space-y-2">
                            <li>
                              In case of bulk mobilization, <span className="font-bold text-[#007958]">MENA Limited</span> sends its PRO to airport for ensuring the candidates are present and boarding the planes.
                            </li>
                            <li>
                              PRO gives the verbal report to Recruitment Manager/Recruiter in order to inform foreign principal in case of any no show.
                            </li>
                            <li>
                              <span className="font-bold text-[#007958]">MENA Limited</span> does not stop here but goes one step further requesting its client to confirm the safe arrival of candidates. Though Profit is like Oxygen to any company/business, but we at <span className="font-bold text-[#007958]">MENA Limited</span> believe that “Customer (both client and candidates) is the Big Boss.”
                            </li>
                          </ul>
                        </div>
                      </>
                    ) : section.id === "service-fee" ? (
                      <>
                        <div className={sectionTitleContainerStyle}>
                          <img
                            src={require("../assets/hp7.png")}
                            alt="Service Fee"
                            className="w-12 h-12 rounded-full object-cover mr-4 bg-gray-200"
                          />
                          <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                        </div>
                        <div className="bg-white rounded-xl shadow-[0_4px_6px_rgba(34,197,94,0.3)] p-12 mb-8">
                          <h3 className="text-lg font-semibold mb-4 text-[#007958]">MENA Service Fee Structure</h3>
                          <ul className="list-disc ml-8 text-gray-700 space-y-3">
                            <li>
                              <b>Office Staff / Field Staff / Foreman and above:</b> MENA charges a nominal fee of <span className="text-[#007958] font-bold">10% of the annual gross salary</span>.
                            </li>
                            <li>
                              <b>Junior Level / Skilled / Semi-Skilled / Unskilled Positions:</b> MENA charges a reasonable recruitment fee, payable either by the employer or employee as per the agreement.
                            </li>
                            <li>
                              If the employer wishes MENA to charge the employees, it is always in accordance with government-specified terms.
                            </li>
                            <li>
                              <b>No charges are levied on the employee</b> if the employer compensates MENA for their service fee.
                            </li>
                          </ul>
                          <div className="mt-6 bg-gray-50 rounded-lg shadow p-6 border-l-4 border-[#007958]">
                            <span className="text-gray-700">
                              Our transparent fee structure ensures compliance with all regulatory guidelines and fairness for both employers and candidates.
                            </span>
                          </div>
                        </div>
                      </>
                    ) : section.id === "resume-search" ? (
                      <>
                        <div className={sectionTitleContainerStyle}>
                          <img
                            src={require("../assets/hp8.png")}
                            alt="Resume Search"
                            className="w-12 h-12 rounded-full object-cover mr-4 bg-gray-200"
                          />
                          <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                        </div>
                        <div className="flex flex-wrap -mx-4">
                          <div className="w-full md:w-1/2 px-4">
                            <div className={sectionStyle}>
                              <div className={titleContainerStyle}>
                                <h3 className="text-lg font-semibold">Key Benefits</h3>
                              </div>
                              <ul className="list-disc ml-6 space-y-3">
                                {sectionContent[section.id].benefits.map((benefit, idx) => (
                                  <li key={idx} className={paragraphStyle}>{benefit}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full md:w-1/2 px-4">
                            <div className={sectionStyle}>
                              <div className={titleContainerStyle}>
                                <h3 className="text-lg font-semibold">Our Approach</h3>
                              </div>
                              <p className={paragraphStyle}>{sectionContent[section.id].approach}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : section.id === "screening" ? (
                      <>
                        <div className={sectionTitleContainerStyle}>
                          <img
                            src={require("../assets/hp9.png")}
                            alt="Screening"
                            className="w-12 h-12 rounded-full object-cover mr-4 bg-gray-200"
                          />
                          <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                        </div>
                        <div className="flex flex-wrap -mx-4">
                          <div className="w-full md:w-1/2 px-4">
                            <div className={sectionStyle}>
                              <div className={titleContainerStyle}>
                                <h3 className="text-lg font-semibold">Key Benefits</h3>
                              </div>
                              <ul className="list-disc ml-6 space-y-3">
                                {sectionContent[section.id].benefits.map((benefit, idx) => (
                                  <li key={idx} className={paragraphStyle}>{benefit}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full md:w-1/2 px-4">
                            <div className={sectionStyle}>
                              <div className={titleContainerStyle}>
                                <h3 className="text-lg font-semibold">Our Approach</h3>
                              </div>
                              <p className={paragraphStyle}>{sectionContent[section.id].approach}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div>
                        <div className={sectionTitleContainerStyle}>
                          <img src="/path/to/section-image.jpg" alt={section.title} className={sectionTitleImageStyle} />
                          <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                        </div>
                        <div className="flex flex-wrap -mx-4">
                          <div className="w-full md:w-1/2 px-4">
                            <div className={sectionStyle}>
                              <div className={titleContainerStyle}>
                                <h3 className="text-lg font-semibold">Key Benefits</h3>
                              </div>
                              <ul className="list-disc ml-6 space-y-3">
                                {sectionContent[section.id].benefits.map((benefit, idx) => (
                                  <li key={idx} className={paragraphStyle}>{benefit}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="w-full md:w-1/2 px-4">
                            <div className={sectionStyle}>
                              <div className={titleContainerStyle}>
                                <h3 className="text-lg font-semibold">Our Approach</h3>
                              </div>
                              <p className={paragraphStyle}>{sectionContent[section.id].approach}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </main>
        </div>
        <Footer photostream={["/photos/photo1.jpg", "/photos/photo2.jpg", "/photos/photo3.jpg", "/photos/photo4.jpg", "/photos/photo5.jpg", "/photos/photo6.jpg"]} />
      </div>
    </div>
  );
}
