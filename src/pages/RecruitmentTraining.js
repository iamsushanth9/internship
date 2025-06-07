import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Import images or use placeholders if images are missing
import recruitment1 from "../assets/recruitment1.png";
import recruitment2 from "../assets/recruitment2.png";
import recruitment3 from "../assets/recruitment3.png";
import recruitment4 from "../assets/recruitment4.png";
import recruitment5 from "../assets/recruitment5.png";
import recruitment6 from "../assets/recruitment6.png";
import recruitment7 from "../assets/recruitment7.png";
import recruitment8 from "../assets/recruitment8.png";
import recruitment9 from "../assets/recruitment9.png";

export default function RecruitmentTraining() {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

  const sections = [
    { id: "resume-search", title: "Resume Search - Resources" },
    { id: "screening", title: "Screening Process" },
    { id: "selection", title: "Selection Process" },
    { id: "post-interview", title: "Post Interview Process" },
    { id: "mobilization", title: "Mobilization" },
    { id: "ticketing", title: "Ticketing" },
    { id: "orientation", title: "Orientation" },
    { id: "airport", title: "Airport Activities" },
    { id: "service-fee", title: "Service Fee" }
  ];

  useEffect(() => {
    const observer = new window.IntersectionObserver(
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

  // Dummy content for demonstration
  const sectionContent = {
    "resume-search": [
      "OUR IN-HOUSE JOB PORTALS www.huntsjob.com and www.jobs4hunt.ph",
      "DATABANK",
      "BRANCH OFFICES ACROSS INDIA & OVERSEAS",
      "ADVERTISEMENTS",
      "DISTRICT EMPLOYMENT AND MANPOWER OFFICES",
      "SPECIALISED AGENCIES",
      "WORKERS WELFARE ASSOCIATIONS",
      "INDUSTRIAL TRAINING INSITITUTES / VOCATIONAL / PROFESSIONAL CENTRES",
      "HEAD HUNTING"
    ],
    "screening": (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Targeted Sourcing:</b> Our Sourcing Department carefully analyzes client requirements and filters our extensive database to identify candidates who best match the job specifications, industry relevance, qualifications, experience, and nationality.
        </p>
        <p>
          <b>Collaborative Screening:</b> All our regional and international offices participate in the screening process simultaneously. Shortlisted profiles are then forwarded to specialized in-house departments (Engineering, Civil Construction, Marine, Oil & Gas, Hospitality, Health Care, Management) for a detailed review and direct communication with prospects to confirm their interest and availability.
        </p>
        <p>
          <b>Thorough Verification:</b> Our Operations Department conducts referral checks, certificate verifications, police clearances (as required), and manages travel documentation to ensure candidate authenticity and compliance.
        </p>
        <p>
          <b>Skill Validation:</b> Trade tests are conducted at MENA training centers according to client guidelines. For specialized roles, we coordinate third-party assessments with internationally recognized agencies, ensuring globally accepted validation.
        </p>
        <p>
          <b>Comprehensive Evaluation:</b> Pre-screened candidates are invited for personal interviews at our offices, where we assess their basic and job-specific skills, knowledge, aptitude, attitude, medical status, and language proficiency. A detailed evaluation report, along with the candidate’s resume, is then shared with the client for final review.
        </p>
      </div>
    ),
    "selection": (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Interview Scheduling:</b> Upon receiving the list of approved candidates for final interview (personal, telephonic, or video conferencing), we coordinate and schedule interviews as per the client’s timeframe. All shortlisted candidates are notified of their selection and interview details via email, phone, cable, or in person, depending on their location.
        </p>
        <p>
          <b>Video Conferencing Support:</b> For video interviews, we assemble approved candidates in batches at our office and keep the client updated on the timing for each candidate.
        </p>
        <p>
          <b>Interview Facilities & Coordination:</b> MENA arranges a well-equipped interview hall with individual cabins for delegates, ample seating for candidates, stationery, secretarial assistance, and communication facilities. Our experienced staff coordinates logistics, distributes test papers (if applicable), manages entry passes, and regulates the candidate flow. We maintain close coordination with visiting delegates and assist in compiling final selection status reports.
        </p>
        <p>
          <b>Additional Services:</b> MENA offers video conferencing facilities for a fee (based on candidate count, location, and other parameters; estimates available on request). We can also conduct interviews and select candidates on behalf of clients, with our technical evaluation team critically scrutinizing resumes, conducting trade tests and personal interviews before deployment.
        </p>
      </div>
    ),
    "post-interview": (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Post Interview Process:</b> After the interview (conducted by MENA Limited or the foreign principal), the recruiter dispatches the CVs to the respective company. Before dispatch, the recruiter ensures that a clear and complete passport copy and a photograph are attached to the application, and a copy of the first page is kept in our file for future mobilization.
        </p>
        <p>
          The principal reviews the applications, evaluates, comments, and communicates the names of suitable candidates, forming the final select list. This process ensures candidates are chosen based on qualifications, experience, personality, skills, aptitude, and family background.
        </p>
        <p>
          <b>Updating the List of Selected Candidates:</b> Once the final list and offer letters are received, the recruiter contacts the selected applicants via SMS, email, and phone calls. The list is also displayed on the notice board at the reception. Applicants are informed about their position, company, location, remuneration, leave cycle, working hours, and contract period. If they accept the terms, the recruiter relays this to the principal and collects the candidates' passports.
        </p>
        <p>
          Candidates are then sent for a pre-medical test. Results are shared with the client to apply for visas for those declared medically fit. Candidates found unfit are reported to the client for replacement, and their passports are returned.
        </p>
        <p>
          <b>Background Check:</b> MENA Limited conducts background checks, including employment verification, credit history, and criminal history, to assess the candidate’s suitability and minimize hiring risks. Applicants are also required to submit a Police Clearance Certificate.
        </p>
        <p>
          <b>Medical Check:</b> In accordance with host country regulations, a medical check is conducted for finally selected/approved candidates at authorized medical centers. MENA keeps clients informed about the progress and forwards the list of medically fit candidates for visa/work permit processing. Selected and fit candidates are briefed on travel arrangements, airport assistance, and important guidelines for the country of employment.
        </p>
      </div>
    ),
    "mobilization": "Clients forward visa copy or original visa of the selected candidates to MENA. On receipt of such documents, MENA invites the candidates traveling to the host country, to hand over the documents, check for correctness of documents, immigration clearance, certificates' endorsement and other paper works to be in order. MENA carries its own identification tags and such tags are distributed to each candidate with employer's contact details for easy identification at the arrival airport.",
    "ticketing": "Depending upon the mutual understanding between the foreign principal & Recruitment Agency the arrangement for air ticket is made.",
    "orientation": (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Orientation:</b> Orientation is important because it lays a foundation for the new employee's entire career with the department. It encourages employee confidence and helps the new employee adapt faster to the job; contributes to a more effective, productive workforce; improves employee retention; and more.
        </p>
        <div>
          <b>Some of the Questions Covered during Orientation:</b>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Contract and Benefits</li>
            <li>Salary and Position</li>
            <li>About Company</li>
            <li>How long are the employment contracts?</li>
            <li>What happens if I don't like living in Country and don't feel I can complete my contract?</li>
            <li>Can I bring my family?</li>
            <li>Where will I live?</li>
            <li>Do I have to share my apartment/house (In case very Sr. Professional)?</li>
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
      </div>
    ),
    "airport": (
      <div className="space-y-4 text-gray-700">
        <p>
          <b>Airport Activities:</b> In case of bulk mobilization, MENA Limited sends its PRO to the airport to ensure all candidates are present and boarding their flights as scheduled.
        </p>
        <p>
          The PRO provides a verbal report to the Recruitment Manager/Recruiter, who then informs the foreign principal in case of any no-shows.
        </p>
        <p>
          MENA Limited goes a step further by requesting its client to confirm the safe arrival of candidates. While profit is essential for any business, at MENA Limited we believe that <b>“Customer (both client and candidates) is the Big Boss – who has the power even to remove CEO of an organization by making an alternative choice.”</b>
        </p>
      </div>
    ),
    "service-fee": [
      "MENA charges a nominal fee of 10% of annual gross salary of office staff / Field staff / foreman and above.",
      "For junior level / skilled / semi-skilled / un-skilled positions, MENA charges a reasonable recruitment fee, payable either by employer or employee as per the agreement.",
      "If the employer wishes MENA to charge the employees, it is done in accordance with government's specified terms.",
      "MENA does not levy any charges on the employee if the employer compensates MENA for their service fee."
    ]
  };

  const sectionImages = {
    "resume-search": recruitment1 || "https://via.placeholder.com/220x180?text=Image+1",
    "screening": recruitment2 || "https://via.placeholder.com/220x180?text=Image+2",
    "selection": recruitment3 || "https://via.placeholder.com/220x180?text=Image+3",
    "post-interview": recruitment4 || "https://via.placeholder.com/220x180?text=Image+4",
    "mobilization": recruitment5 || "https://via.placeholder.com/220x180?text=Image+5",
    "ticketing": recruitment6 || "https://via.placeholder.com/220x180?text=Image+6",
    "orientation": recruitment7 || "https://via.placeholder.com/220x180?text=Image+7",
    "airport": recruitment8 || "https://via.placeholder.com/220x180?text=Image+8",
    "service-fee": recruitment9 || "https://via.placeholder.com/220x180?text=Image+9",
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 bg-gray-100" />
      <div className="relative z-10">
        <Navbar />
        {/* Header Section */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 style={{ color: "#007958", fontSize: "clamp(2.5rem,6.5vw,4rem)" }} className="font-bold">
              Recruitment and Training
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Comprehensive recruitment and training solutions for your business needs.
            </p>
          </div>
        </div>
        {/* Main layout: sticky sidebar + scrollable content */}
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
              <div
                key={section.id}
                id={section.id}
                ref={el => sectionRefs.current[section.id] = el}
                className="mb-12"
              >
                <div className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  {/* Image side OUTSIDE the card */}
                  <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                    <img
                      src={sectionImages[section.id]}
                      alt={section.title}
                      className="w-[420px] h-[320px] object-contain"
                    />
                  </div>
                  {/* Card side */}
                  <div className="w-full md:w-2/3">
                    <h3
                      className="text-xl font-bold text-gray-900 mb-2"
                      style={{ fontFamily: "Baufra, sans-serif" }}
                    >
                      <span style={{ color: "#ff4500", fontSize: "clamp(1.5rem,4vw,2.2rem)" }}>
                        {section.title}
                      </span>
                    </h3>
                    <div className="bg-white rounded-xl shadow-[0_4px_6px_rgba(34,197,94,0.3)] p-8">
                      {section.id === "resume-search" || section.id === "service-fee" ? (
                        <ul className="list-disc ml-6 space-y-2 text-gray-700">
                          {sectionContent[section.id].map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      ) : section.id === "screening" || section.id === "selection" ? (
                        sectionContent[section.id]
                      ) : (
                        <p className="text-gray-700">{sectionContent[section.id]}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
